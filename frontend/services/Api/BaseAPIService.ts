export interface ErrorResponse extends Response {
  json: () => Promise<ErrorResponseBody>;
}

export interface ErrorResponseBody {
  code: number;
  message: string;
  stacktrace?: string[];
}

export default class BaseAPIService {
  protected makeRequest<ResultType>(location: string, options: RequestInit = {}): Promise<ResultType> {
    const requestOptions: RequestInit = {
      headers: {
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
      },
      ...options,
    };

    return fetch(location, requestOptions).then(response => this.processResponse<ResultType>(response));
  }

  protected async processResponse<ResultType>(response: Response): Promise<ResultType> {
    if (this.isErrorResponse(response)) {
      throw await response.json();
    }

    return response.json();
  }

  protected isErrorResponse(response: Response): response is ErrorResponse {
    return response.status >= 300 || response.status < 200;
  }

  protected getQueryString(params: Record<string, any>): string {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
