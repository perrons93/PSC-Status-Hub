import testStatus, {
  activateTest,
  initialState,
  deactivateTest
} from "../../modules/testStatusRedux";

describe("setLanguage action", () => {
  it("should update emails to french or english", () => {
    expect(initialState).toEqual({ isTestActive: false });
    const action1 = activateTest();
    expect(testStatus(initialState, action1)).toEqual({ isTestActive: true });
    const action2 = deactivateTest();
    expect(testStatus(initialState, action2)).toEqual({ isTestActive: false });
  });
});
