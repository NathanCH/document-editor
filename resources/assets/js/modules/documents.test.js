import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  REQUEST_FETCH,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  request,
  setFilter,
  sortView,
  setSort,
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

  test('it should handle `SET_FILTER` action', () => {
    expect(reducer(undefined, {
      type: 'SET_FILTER',
      payload: 'list',
    })).toMatchObject({
      view: 'list',
    });
  });

  test('it should handle `SET_SORT` action', () => {
    expect(reducer(undefined, {
      type: 'SET_SORT',
      payload: 'date_asc',
    })).toMatchObject({
      sort: 'date_asc',
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

  it('creates `SET_FILTER` action on setFilter() event', () => {
    const expectedActions = [
      { type: 'SET_FILTER', payload: 'list' },
    ];

    const store = mockStore({});

    store.dispatch(setFilter('list'));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

  it('creates `SET_SORT`, `REQUEST_FETCH` actions on sortView() event', () => {
    fetch.mockResponse();

    const newSort = 'date_asc';

    const expectedActions = [
      { type: 'SET_SORT', payload: newSort },
      { type: 'REQUEST_FETCH' },
    ];

    const store = mockStore({});

    store.dispatch(sortView(newSort, 'foo'));

    expect(store.getActions()).toMatchObject(expectedActions);

    store.dispatch(sortView(newSort, newSort));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

  it('creates `SET_SORT` action on setSort() event', () => {
    const expectedActions = [
      { type: 'SET_SORT', payload: 'date_asc' },
    ];

    const store = mockStore({});

    store.dispatch(setSort('date_asc'));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

});