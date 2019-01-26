import { request } from 'modules/documents/requestReducer';

export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

const initialState = {
  view: 'grid',
  sort: 'date_desc',
};

export function setFilter(viewString) {
  return {
    type: SET_FILTER,
    payload: viewString,
  };
}

export function sortView(sortString, oldSortString) {
  return dispatch => {
    if (sortString !== oldSortString) {
      dispatch(setSort(sortString));
      dispatch(request(sortString));
    }
  };
}

export function setSort(sortString) {
  return {
    type: SET_SORT,
    payload: sortString,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        view: action.payload,
      }

    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      }

    default:
      return state;
  }
};
