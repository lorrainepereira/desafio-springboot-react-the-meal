import Toastr from '../components/Toastr';
import { Consumer, ConsumerImpl } from './utility-types/Functions';

export function get<T = any>(
  url: RequestInfo,
  headers: HeadersInit = { Accept: 'application/json', 'Content-Type': 'application/json'}
): Promise<T> {
  return fetch(url, { headers }).then((d) => {
    const contentType = d.headers.get('Content-Type') || '';

    if (/application\/json/.test(contentType)) {
      return d.json();
    }
    return d.text();
  });
}

export async function asyncGet<T = any>(url: RequestInfo): Promise<T> {
  return fetch(url).then((d) => {
    const contentType = d.headers.get('Content-Type') || '';

    if (/application\/json/.test(contentType)) {
      return d.json();
    }

    return d.text();
  });
}

export function post<T = any>(url: RequestInfo, body?: any): Promise<T> {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  }).then((d) => {
    const contentType = d.headers.get('Content-Type') || '';

    if (/application\/json/.test(contentType)) {
      return d.json();
    }
    return d.text();
  });
}

export function put<T = any>(url: RequestInfo, body?: any): Promise<T> {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(body),
  }).then((d) => {
    const contentType = d.headers.get('Content-Type') || '';

    if (/application\/json/.test(contentType)) {
      return d.json();
    }
    return d.text();
  });
}

export function patch<T = any>(url: RequestInfo, body?: any): Promise<T> {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(body),
  }).then((d) => {
    const contentType = d.headers.get('Content-Type') || '';

    if (/application\/json/.test(contentType)) {
      return d.json();
    }
    return d.text();
  });
}

export function del(url: RequestInfo): Promise<Response> {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
}

export function postMultipart<T = any>(
  url: RequestInfo,
  paramName: string,
  files: any[],
  requestsParams: any[] = [],
  nomeArquivo: string = ''
): Promise<T> {
  const formData = new FormData();

  files.forEach((arquivo) => formData.append(paramName, arquivo, nomeArquivo));

  requestsParams.forEach((param) => formData.set(param.name, param.value));

  return fetch(url, {
    method: 'POST',
    body: formData,
  }).then((d) => d.json());
}

export function getPDFFile(url: RequestInfo): Promise<Blob> {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/pdf',
    },
    responseType: 'blob',
  } as any).then((d) => d.blob());
}

export async function getPDFUrl(url: RequestInfo): Promise<string> {
  return getPDFFile(url).then((data) => {
    const file = new Blob([data], { type: 'application/pdf' });

    return URL.createObjectURL(file);
  });
}

export function postAndGetPDFFile(url: RequestInfo, body?: any): Promise<Blob> {
  const requestInit: any = {
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    responseType: 'blob',
  };
  if (!!body) {
    requestInit.body = JSON.stringify(body);
  }

  return fetch(url, requestInit).then((d) => d.blob());
}

export async function postAndGetPDFUrl<B = any>(url: RequestInfo, body?: B): Promise<string> {
  return postAndGetPDFFile(url, body).then((data) => {
    const file = new Blob([data], { type: 'application/pdf' });

    return URL.createObjectURL(file);
  });
}

export function fetchArrayBuffer(url: RequestInfo): Promise<ArrayBuffer> {
  return fetch(url).then((response) => response.arrayBuffer());
}

export function fetchFile(url: RequestInfo, mimeType: any): Promise<Blob> {
  return fetch(url, {
    headers: {
      'Content-Type': mimeType,
    },
    responseType: 'blob',
  } as any).then((response) => response.blob());
}

export function postFile(url: RequestInfo, body: any): Promise<Response> {
  const params: RequestInit = { method: 'POST', body };

  return fetch(url, params);
}

export function buildUrlWithQueryParams(
  url: string,
  params?: Record<string, string | number | string[] | number[] | any>
): string {
  if (params === null || params === undefined) {
    return url;
  }

  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key] ?? '';

    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));

      return;
    }
    searchParams.append(key, value);
  });

  return `${url}?${searchParams.toString()}`;
}

/**
 * <p>
 *   So ira mostrar o errMessage quando o request tiver um status
 *   diferente de 400
 * </p>
 * <hr/>
 * <h3>Como usar</h3>
 * <b>Opcao 1</b>
 * <pre>
 *   import { handleRequestError } from '@png/utils';
 *   get('url')
 *   .then((_) => {})
 *   .catch(handleRequestError('Erro ao realizar request'))
 * </pre>
 * <b>Opcao 2</b>
 * <pre>
 *   import { handleRequestError } from '@png/utils';
 *   get('url')
 *   .then((_) => {})
 *   .catch(handleRequestError(
 *      'Erro ao realizar request',
 *      (originalErr) => {
 *        // tratar error
 *      })
 *   )
 * </pre>
 * @param errMessage Mensagem para mostrar no {@link Toastr}.
 * So eh mostrado quando o err.status for diferente de 400
 * @param callBackWithErro Sempre eh chamado, ele eh chamado com o erro do catch.
 */
export function handleRequestError<T = any>(
  errMessage: string,
  callBackWithErro: Consumer<T> = ConsumerImpl
): Consumer<T> {
  return (err: T) => {
    // @ts-ignore: TS Reclamando
    if (err?.status !== 400) {
      Toastr.error(errMessage);
    }
    callBackWithErro(err);
  };
}
