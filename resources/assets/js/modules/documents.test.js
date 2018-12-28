import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  REQUEST_FETCH,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  request,
  default as reducer,
} from './documents.js';

describe('Document reducer', () => {

  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, {});
  });

  test('it runs', () => {
    console.log(initialState);
  });

});