/**
 * Author: Quan Vo
 * Date: 10/10/18
 */

import {authHeader} from "./header";
import {requestSaga} from "./index";


/**
 * @param url: string, required
 * @param params: string, optional
 */
export function* apiGet(url, params, headers) {
  try {
    const config = {
      url,
      headers: {...authHeader(), ...headers}
    };
    if (params)
      config.params = params;

    return yield* requestSaga(config);

  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}

/**
 * @param url: string, required
 * @param params: string, optional
 */
export function* apiDelete(url, params, headers) {
  try {
    const config = {
      url,
      headers: {...authHeader(), ...headers}
      method: "delete",
    };
    if (params)
      config.params = params;

    return yield* requestSaga(config);

  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param params: string, optional
 * @param headers: object, optional
 */
export function* apiPost(url, body, params, headers) {
  try {
    const config = {
      url,
      headers: {...authHeader(), ...headers},
      method: "post",
      data: body
    };
    if (params)
      config.params = params;

    return yield* requestSaga(config);

  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param params: string, optional
 * @param headers: object, optional
 */
export function* apiPut(url, body, params, headers) {
  try {
    const config = {
      url,
      headers: {...authHeader(), ...headers},
      method: "put",
      data: body
    };
    if (params)
      config.params = params;

    return yield* requestSaga(config);

  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}