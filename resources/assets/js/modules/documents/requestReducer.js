export const REQUEST_FETCH = 'REQUEST_FETCH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const initialState = {
  documents: {},
  count: 0,
  isFetching: false,
  hasError: false,
};

export function requestFetch() {
  return {
    type: REQUEST_FETCH,
  };
}

export function requestSuccess(body) {
  return {
    type: REQUEST_SUCCESS,
    payload: body,
  };
}

export function requestFailure(err) {
  return {
    type: REQUEST_FAILURE,
    payload: err,
  };
}

export function mapState(arr) {
  return arr.map(elm => ({
    ...elm,
    isDeleting: false,
    hasDeleteError: false,
  }));
}

export function mapArrayToObject(docs) {
  const obj = {};
  docs.forEach(doc => obj[doc.id] = { ...doc });
  return obj;
}

export function request(sort = '') {
  const url = buildUrl('/api/documents', { sort: sort });
  const config = {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  };

  return dispatch => {
    dispatch(requestFetch());
    return fetch(url, config)
      .then(res => res.json())
      .then(body => mapArrayToObject(mapState(body.data)))
      .then(body => dispatch(requestSuccess(body)))
      .catch(err => dispatch(requestFailure(err)));
  };
}

export function buildUrl(path, params = {}) {
  return path +'?' + new URLSearchParams(Object.entries(params));
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        documents: {},
        isFetching: true,
        hasError: false,
      }

    case REQUEST_SUCCESS:
      return {
        ...state,
        count: action.payload.length,
        documents: action.payload,
        hasError: false,
        isFetching: false,
      }

    case REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }

    default:
      return state;
  }
};
