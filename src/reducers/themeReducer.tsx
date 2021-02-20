type ThemeAction = {
  type: 'SET_THEME';
  payload: { theme: string };
};

export function setTheme(theme: string) {
  return {
    type: 'SET_THEME',
    payload: { theme },
  };
}

const initialState = {
  theme: 'light',
};

export function themeReducer(state = initialState, action: ThemeAction) {
  if (action.type === 'SET_THEME') {
    return { ...state, theme: action.payload.theme };
  } else {
    return state;
  }
}
