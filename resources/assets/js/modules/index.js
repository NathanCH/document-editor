import { combineReducers } from 'redux';

import counter from './counter';
import editor from './editor';
import documents from './documents';

export default combineReducers({ counter, editor, documents });
