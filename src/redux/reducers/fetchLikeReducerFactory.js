export default function extendReducer(reducerFn, reducerName) {
  return (state, action) => {
    switch (action.type) {
      case `FETCH_${reducerName}_START`:
        return { ...state, loading: true, error: '' };
      case `FETCH_${reducerName}_DONE`:
        return { ...state, loading: false, error: '' };
      case `FETCH_${reducerName}_ERROR`:
        return { ...state, loading: false, error: String(action?.payload?.error || 'Unknown error') };
      default:
        return reducerFn(state, action);
    }
  };
}
