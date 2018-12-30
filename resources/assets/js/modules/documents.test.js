import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  REQUEST_FETCH,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  request,
  setView,
  default as reducer,
} from './documents.js';

const mockDocuments = [
  {
    id: 1,
    title: 'Mocked Document',
    created_at: '',
    updated_at: '',
  },
];

describe('Document - Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, {});
  });

  test('it should be a function', () => {
    expect(reducer).toBeInstanceOf(Function);
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

  test('it should handle `SET_VIEW` action', () => {
    expect(reducer(undefined, {
      type: 'SET_VIEW',
      payload: 'list',
    })).toMatchObject({
      view: 'list',
    });
  });

});

describe('Document - Action Creators', () => {
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

  it('creates `SET_VIEW` action on setView() event', () => {
    const expectedActions = [
      { type: 'SET_VIEW', payload: 'list' },
    ];

    const store = mockStore({});

    store.dispatch(setView('list'));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

});