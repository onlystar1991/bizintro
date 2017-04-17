import { LIST_LOAD, LIST_UNLOAD } from '../actions';

export function loadList(lists) {
  return { type: LIST_LOAD, lists };
}

export function unloadList() {
  return { type: LIST_UNLOAD, lists };
}