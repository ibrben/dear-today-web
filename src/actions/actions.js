export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_EVENTS_FAILURE', payload: error.message });
    }
  };
};

export default fetchEvents;