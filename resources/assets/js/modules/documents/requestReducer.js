export const REQUEST_FETCH = 'REQUEST_FETCH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const initialState = {
  documents: [],
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

export function requestFailure(msg) {
  return {
    type: REQUEST_FAILURE,
    payload: msg,
  };
}

export function mapStateToDocuments(docs, state) {
  return docs.map(doc => ({
    ...doc,
    isDeleting: false,
    hasDeleteError: false,
  }));
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
      .then(body => mapStateToDocuments(body.data))
      .then(body => dispatch(requestSuccess(body)))
      .catch(err => dispatch(requestFailure(err)));
  };
}

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
