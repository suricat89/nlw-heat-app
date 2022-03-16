import { Method, AxiosRequestConfig, AxiosInstance } from 'axios';
import _ from 'lodash';
import { environment } from '../config/environment';

interface IRequestConfig extends Omit<AxiosRequestConfig, 'url' | 'method'> {
  timeout?: number;
  retries?: number;
}

export async function dispatchRequest<T>(
  api: AxiosInstance,
  method: Method,
  url: string,
  config: IRequestConfig = {}
): Promise<T> {
  const finalConfig = getConfig(method, config);
  const { timeout, retries } = finalConfig;

  for (let i = 0; i <= retries; i++) {
    try {
      const response = await api.request({
        ...finalConfig,
        timeout,
        method,
        url
      });

      return response.data as T;
    } catch (error) {
      /* istanbul ignore next */
      if (environment.app.logApiErrors) {
        console.error(error);
      }
    }
  }

  throw new Error(`Error fetching URL [${method}] '${url}'`);
}

interface IRequestConfigWithDefaults extends IRequestConfig {
  retries: number;
  timeout: number;
}
function getConfig(
  method: Method,
  config: IRequestConfig
): IRequestConfigWithDefaults {
  const methodsThatAllowRetry: Method[] = ['GET', 'OPTIONS'];
  const defaultConfig = _.cloneDeep(config);

  _.defaultTo(defaultConfig.timeout, 5000);
  defaultConfig.retries = methodsThatAllowRetry.includes(method)
    ? _.defaultTo(config.retries, 2)
    : 0;

  return defaultConfig as IRequestConfigWithDefaults;
}
