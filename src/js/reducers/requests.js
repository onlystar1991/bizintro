import { Record } from 'immutable';

import {
  GET_LISTS,
  GET_LISTS_START,
  MOVE_REQUEST,
  MOVE_LIST,
  TOGGLE_DRAGGING
} from '../actions/requests';

/* eslint-disable new-cap */
const InitialState = Record({
  isFetching: false,
  lists: [],
  isDragging: false
});
/* eslint-enable new-cap */
const initialState = new InitialState;


export default function lists(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_START:
      return state.set('isFetching', true);
    case GET_LISTS:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false)
            .set('lists', action.lists);
      });
    case MOVE_REQUEST: {
      const newLists = [...state.lists];
      const { lastX, lastY, nextX, nextY } = action;
      if (lastX === nextX) {
        newLists[lastX].requests.splice(nextY, 0, newLists[lastX].requests.splice(lastY, 1)[0]);
      } else {
        // move element to new place
        newLists[nextX].requests.splice(nextY, 0, newLists[lastX].requests[lastY]);
        // delete element from old place
        newLists[lastX].requests.splice(lastY, 1);
      }
      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    case MOVE_LIST: {
      const newLists = [...state.lists];
      const { lastX, nextX } = action;
      const t = newLists.splice(lastX, 1)[0];

      newLists.splice(nextX, 0, t);

      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    case TOGGLE_DRAGGING: {
      return state.set('isDragging', action.isDragging);
    }
    default:
      return state;
  }
}
