import { request } from '@umijs/max';
import type { CurrentUser, ListItemDataType, ListItemWorkType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}

export async function queryListWork(params: {
  count: number;
}): Promise<{ data: { list: ListItemWorkType[] } }> {
  return request('/api/work_list_Detail', {
    params,
  });
}