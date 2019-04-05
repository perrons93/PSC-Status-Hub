import emibInbox, {
  initializeEmailSummaries,
  readEmail,
  addEmail,
  addTask
} from "../../modules/EmibInboxRedux";
import { setLanguage } from "../../modules/LocalizeRedux";
import { emailsJson } from "../../modules/sampleEmibJson";

describe("EmibInboxRedux", () => {
  let stubbedInitialState;
  beforeEach(() => {
    stubbedInitialState = {
      emails: emailsJson.emailsEN,
      emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length),
      emailActions: [[], [], []]
    };
  });

  afterEach(() => {
    stubbedInitialState = {};
  });

  describe("setLanguage action", () => {
    it("should update emails to french or english", () => {
      const action1 = setLanguage("fr");
      expect(emibInbox(stubbedInitialState, action1).emails).toEqual(emailsJson.emailsFR);
      const action2 = setLanguage("en");
      expect(emibInbox(stubbedInitialState, action2).emails).toEqual(emailsJson.emailsEN);
    });
  });

  describe("read email action", () => {
    it("should update email 0 read state to true", () => {
      const readAction = readEmail(0);
      const newState = emibInbox(stubbedInitialState, readAction);
      expect(newState.emailSummaries[0].isRead).toEqual(true);
      expect(newState.emailSummaries[1].isRead).toEqual(false);
    });

    it("should update email 1 read state to true", () => {
      const readAction = readEmail(1);
      const newState = emibInbox(stubbedInitialState, readAction);
      expect(newState.emailSummaries[0].isRead).toEqual(false);
      expect(newState.emailSummaries[1].isRead).toEqual(true);
    });
  });

  describe("add email action", () => {
    it("should update email 0 count state", () => {
      const addAction = addEmail(0);
      const newState = emibInbox(stubbedInitialState, addAction);
      expect(newState.emailSummaries[0].emailCount).toEqual(1);
      expect(newState.emailSummaries[0].taskCount).toEqual(0);
      expect(newState.emailSummaries[1].emailCount).toEqual(0);
    });
  });

  describe("add task action", () => {
    it("should update email 0 count state", () => {
      const addAction = addTask(0);
      const newState = emibInbox(stubbedInitialState, addAction);
      expect(newState.emailSummaries[0].taskCount).toEqual(1);
      expect(newState.emailSummaries[0].emailCount).toEqual(0);
      expect(newState.emailSummaries[1].taskCount).toEqual(0);
    });
  });
});
