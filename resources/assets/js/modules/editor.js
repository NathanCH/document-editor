export const EDITOR_MODE = 'editor/EDITOR_MODE';
export const PREVIEW_MODE = 'editor/PREVIEW_MODE';
export const TOGGLE_PRINT_LAYOUT = 'editor/TOGGLE_PRINT_LAYOUT';

const initialState = {
  mode: 'MODE_EDITOR',
  is_print_layout: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_MODE:
      return {
        ...state,
        mode: 'MODE_EDITOR',
      }
      
    case PREVIEW_MODE:
      return {
        ...state,
        mode: 'MODE_PREVIEW',
      }
      
    case TOGGLE_PRINT_LAYOUT:
      return {
        ...state,
        is_print_layout: !state.is_print_layout,
      }

    default:
      return state;
  }
};

export const togglePrintLayout = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_PRINT_LAYOUT,
    });
  }
};