export interface IMessageRequest {
  message: string;
}

export interface IForm {
  name: string;
  message: string;
}

export interface IRequestParams {
  url: string;
  method: string;
  body?: IForm | null;
  headers?: Record<string, string>;
}
