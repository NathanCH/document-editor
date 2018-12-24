export const REQUEST_FETCH = 'REQUEST_FETCH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const initialState = {
  documents: [],
  isFetching: false,
  hasError: false,
};

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

export function requestFetch() {
  return {
    type: REQUEST_FETCH,
  };
}

export function requestSuccess() {
  return {
    type: REQUEST_SUCCESS,
  };
}

export function requestFailure() {
  return {
    type: REQUEST_FAILURE,
  };
}

export function request() {
  return dispatch => {
    dispatch(requestFetch());
    return fetch('/api/documents', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(body => {
        dispatch(requestSuccess(body));
      })
      .catch(err => {
        console.log('failed');
        dispatch(requestFailure(err));
      });
  };
}
