export const REQUEST_FETCH = 'REQUEST_FETCH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

const initialState = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
  view: 'grid',
  sort: 'date_desc',
};

export function requestFetch() {
  return {
    type: REQUEST_FETCH,
  };
}

export function requestSuccess(res) {
  return {
    type: REQUEST_SUCCESS,
    payload: res,
  };
}

export function requestFailure() {
  return {
    type: REQUEST_FAILURE,
  };
}

export function request(sort = '') {
  const params = { sort: sort };
  const urlParams = new URLSearchParams(Object.entries(params));

  return dispatch => {
    dispatch(requestFetch());
    return fetch('/api/documents?' + urlParams, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => res.json())
      .then(body => dispatch(requestSuccess(body.data)))
      .catch(err => dispatch(requestFailure(err)));
  };
}

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

// export function requestReducer(state = initialState, action) => {};

// export function viewReducer(state = initialState, action) => {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        documents: [],
        isFetching: true,
        hasError: false,
      }

    case REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        documents: action.payload,
        count: action.payload.length,
      }

    case REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }

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
