import testStatus, {
  activateTest,
  initialState,
  deactivateTest
} from "../../modules/TestStatusRedux";

describe("test activation state", () => {
  it("test activate test", () => {
    const action1 = activateTest();
    expect(testStatus(initialState, action1)).toEqual({ isTestActive: true });
  });
  it("test deactivate test", () => {
    const action2 = deactivateTest();
    expect(testStatus(initialState, action2)).toEqual({ isTestActive: false });
  });
});
