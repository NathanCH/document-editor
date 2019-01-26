import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  setFilter,
  sortView,
  setSort,
  default as reducer,
} from './visibilityReducer.js';

describe('Document - VisibilityReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, {});
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

describe('Document - Visibility Action Creators', () => {
  beforeEach(() => {
    fetch.resetMocks();
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