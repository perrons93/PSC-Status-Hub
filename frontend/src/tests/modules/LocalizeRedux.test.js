import localize, { initialState, setLanguage } from "../../modules/LocalizeRedux";

describe("setLanguage action", () => {
  it("should update language", () => {
    const action1 = setLanguage("fr");
    expect(localize(initialState, action1)).toEqual({ language: "fr" });
    const action2 = setLanguage("en");
    expect(localize(initialState, action2)).toEqual({ language: "en" });
  });
});
