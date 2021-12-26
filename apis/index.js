import { request } from "@/plugins/axios/request";
export function getName(params) {
  return request.get(params);
}
