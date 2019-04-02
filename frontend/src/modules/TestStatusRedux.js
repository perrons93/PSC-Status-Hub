// Action Types
const ACTIVATE_TEST = "testStatus/ACTIVATE_TEST";

// Action Creators
const activateTest = () => ({ type: ACTIVATE_TEST });

// Initial State
const initialState = {
  isTestActive: false
};

// Reducer
const testStatus = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_TEST:
      return {
        ...state,
        isTestActive: true
      };

    default:
      return state;
  }
};

export default testStatus;
export { activateTest, initialState };
