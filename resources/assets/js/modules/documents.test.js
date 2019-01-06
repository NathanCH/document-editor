import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  REQUEST_FETCH,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  request,
  filterView,
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

  test('it should handle `FILTER_VIEW` action', () => {
    expect(reducer(undefined, {
      type: 'FILTER_VIEW',
      payload: 'list',
    })).toMatchObject({
      view: 'list',
    });
  });

  test('it should handle `SORT_VIEW` action', () => {
    expect(reducer(undefined, {
      type: 'SORT_VIEW',
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

  it('creates `FILTER_VIEW` action on filterView() event', () => {
    const expectedActions = [
      { type: 'FILTER_VIEW', payload: 'list' },
    ];

    const store = mockStore({});

    store.dispatch(filterView('list'));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

  it('creates `SORT_VIEW`, `REQUEST_FETCH` actions on sortView() event', () => {
    fetch.mockResponse();

    const newSort = 'date_asc';

    const expectedActions = [
      { type: 'SORT_VIEW', payload: newSort },
      { type: 'REQUEST_FETCH' },
    ];

    const store = mockStore({});

    store.dispatch(sortView(newSort, 'foo'));

    expect(store.getActions()).toMatchObject(expectedActions);

    store.dispatch(sortView(newSort, newSort));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

  it('creates `SORT_VIEW` action on setSort() event', () => {
    const expectedActions = [
      { type: 'SORT_VIEW', payload: 'date_asc' },
    ];

    const store = mockStore({});

    store.dispatch(setSort('date_asc'));

    expect(store.getActions()).toMatchObject(expectedActions);
  });

});