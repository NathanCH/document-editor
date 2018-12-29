export const REQUEST_FETCH = 'REQUEST_FETCH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const SET_VIEW = 'SET_VIEW';

const initialState = {
  documents: [],
  count: 0,
  isFetching: false,
  hasError: false,
  view: 'grid',
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
        dispatch(requestSuccess(body.data));
      })
      .catch(err => {
        dispatch(requestFailure(err));
      });
  };
}

export function setView(viewString) {
  return {
    type: SET_VIEW,
    payload: viewString,
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

    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
      }

    default:
      return state;
  }
};
