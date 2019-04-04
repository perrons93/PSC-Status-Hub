// Action Types
const READ_EMAIL = "emailReadStatus/READ_EMAIL";

// Action Creators
const readEmail = () => ({ type: READ_EMAIL });

// Initial State
const initialState = {
  isReadEmail: false
};

// Reducer
const emailReadStatus = (state = initialState, action) => {
  switch (action.type) {
    case READ_EMAIL:
      return {
        ...state,
        isReadEmail: true
      };
    default:
      return state;
  }
};

export default emailReadStatus;
export { initialState, readEmail };
