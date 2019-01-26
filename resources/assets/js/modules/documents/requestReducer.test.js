import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  request,
  default as reducer,
} from './requestReducer.js';

const mockDocuments = [
  {
    id: 1,
    title: 'Mocked Document',
    created_at: '',
    updated_at: '',
  },
];

describe('Document - RequestReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, {});
  });

  test('it should handle `REQUEST_FETCH` action', () => {
    expect(reducer(undefined, {
      type: 'REQUEST_FETCH',
    })).toMatchObject({
      documents: [],
      isFetching: true,
      hasError: false,
    });
  });

  test('it should handle `REQUEST_SUCCESS` action', () => {
    expect(reducer(undefined, {
      type: 'REQUEST_SUCCESS',
      payload: [],
    })).toMatchObject({
      documents: [],
      isFetching: false,
      hasError: false,
    });
  });

  test('it should handle `REQUEST_FAILURE` action', () => {
    expect(reducer(undefined, {
      type: 'REQUEST_FAILURE',
    })).toMatchObject({
      documents: [],
      isFetching: false,
      hasError: true,
    });
  });

});

describe('Document - Request Action Creators', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('creates `REQUEST_FETCH`, `REQUEST_SUCCESS` actions on request() success', () => {
    fetch.mockResponse(JSON.stringify({ data: mockDocuments }));

    const expectedActions = [
      { type: 'REQUEST_FETCH' },
      { type: 'REQUEST_SUCCESS', payload: mockDocuments },
    ];

    const store = mockStore({});

    return store
      .dispatch(request())
      .then(() => expect(store.getActions()).toMatchObject(expectedActions));
  });

  it('creates `REQUEST_FETCH`, `REQUEST_FAILURE` actions on request() error', () => {
    fetch.mockReject(new Error('Whoops!'));

    const expectedActions = [
      { type: 'REQUEST_FETCH' },
      { type: 'REQUEST_FAILURE' },
    ];

    const store = mockStore({});

    return store
      .dispatch(request())
      .then(() => expect(store.getActions()).toMatchObject(expectedActions));
  });

});