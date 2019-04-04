// Action Types
const ACTIVATE_TEST = "testStatus/ACTIVATE_TEST";
const DEACTIVATE_TEST = "testStatus/DEACTIVATE_TEST";

// Action Creators
const activateTest = () => ({ type: ACTIVATE_TEST });
const deactivateTest = () => ({ type: DEACTIVATE_TEST });

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
    case DEACTIVATE_TEST:
      return {
        ...state,
        isTestActive: false
      };

    default:
      return state;
  }
};

export default testStatus;
export { activateTest, initialState, deactivateTest };
