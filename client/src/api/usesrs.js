import { baseApi } from './base'

export function getPosts(options) {
  return baseApi.get("ussrs", options).then((res) => res.data);
}
