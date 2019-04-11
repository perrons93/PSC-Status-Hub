import emibInbox, {
  initializeEmailSummaries,
  readEmail,
  addEmail,
  addTask,
  updateEmail,
  deleteEmail,
  updateTask
} from "../../modules/EmibInboxRedux";
import { EMAIL_TYPE, ACTION_TYPE } from "../../components/eMIB/constants";
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

    it("should add an email action to the action list", () => {
      const emailAction = {
        emailType: EMAIL_TYPE.reply,
        emailTo: "Sara",
        emailCc: "Luke",
        emailBody: "Hi Sarah!",
        reasonsForAction: "I wanted to say hi."
      };
      const addAction = addEmail(0, emailAction);
      const newState = emibInbox(stubbedInitialState, addAction);
      expect(newState.emailActions[0]).toEqual([{ ...emailAction, actionType: ACTION_TYPE.email }]);
    });
  });

  //TODO jcherry add tests for UPDATE_TASK when implemented

  describe("update email action works as expected", () => {
    it("should update an email action in the action list", () => {
      const emailAction = {
        emailType: EMAIL_TYPE.reply,
        emailTo: "Sara",
        emailCc: "Luke",
        emailBody: "Hi Sarah!",
        reasonsForAction: "I wanted to say hi."
      };
      const emailActionUpdate = {
        emailType: EMAIL_TYPE.replyAll,
        emailTo: "Sara 2",
        emailCc: "Luke 2",
        emailBody: "Hi Sarah! 2",
        reasonsForAction: "I wanted to say hi. 2"
      };
      const addAction = addEmail(0, emailAction);
      const newState1 = emibInbox(stubbedInitialState, addAction);
      expect(newState1.emailActions[0]).toEqual([
        { ...emailAction, actionType: ACTION_TYPE.email }
      ]);
      const updateAction = updateEmail(0, 0, emailActionUpdate);
      const newState2 = emibInbox(newState1, updateAction);
      expect(newState2.emailActions[0]).toEqual([
        { ...emailActionUpdate, actionType: ACTION_TYPE.email }
      ]);
    });

    it("should update 3 email actions one by one then delete them all one by one", () => {
      const email1 = {
        emailType: EMAIL_TYPE.reply,
        emailTo: "To 1",
        emailCc: "CC 1",
        emailBody: "Body 1",
        reasonsForAction: "Reason 1"
      };
      const email2 = {
        emailType: EMAIL_TYPE.reply,
        emailTo: "To 2",
        emailCc: "CC 2",
        emailBody: "Body 2",
        reasonsForAction: "Reason 2"
      };
      const email3 = {
        emailType: EMAIL_TYPE.reply,
        emailTo: "To 3",
        emailCc: "CC 3",
        emailBody: "Body 3",
        reasonsForAction: "Reason 3"
      };
      const email1Update = {
        emailType: EMAIL_TYPE.replyAll,
        emailTo: "To 1 Update",
        emailCc: "CC 1 Update",
        emailBody: "Body 1 Update",
        reasonsForAction: "Reason 1 Update"
      };
      const email2Update = {
        emailType: EMAIL_TYPE.forward,
        emailTo: "To 2 Update",
        emailCc: "CC 2 Update",
        emailBody: "Body 2 Update",
        reasonsForAction: "Reason 2 Update"
      };
      const email3Update = {
        emailType: EMAIL_TYPE.replyAll,
        emailTo: "To 3 Update",
        emailCc: "CC 3 Update",
        emailBody: "Body 3 Update",
        reasonsForAction: "Reason 3 Update"
      };
      // Add first email
      const addAction1 = addEmail(0, email1);
      const newState1 = emibInbox(stubbedInitialState, addAction1);
      expect(newState1.emailActions[0]).toEqual([{ ...email1, actionType: ACTION_TYPE.email }]);
      // Add second email
      const addAction2 = addEmail(0, email2);
      const newState2 = emibInbox(newState1, addAction2);
      expect(newState2.emailActions[0]).toEqual([
        { ...email1, actionType: ACTION_TYPE.email },
        { ...email2, actionType: ACTION_TYPE.email }
      ]);
      // Add third email
      const addAction3 = addEmail(0, email3);
      const newState3 = emibInbox(newState2, addAction3);
      expect(newState3.emailActions[0]).toEqual([
        { ...email1, actionType: ACTION_TYPE.email },
        { ...email2, actionType: ACTION_TYPE.email },
        { ...email3, actionType: ACTION_TYPE.email }
      ]);
      //Update first email
      const updateAction1 = updateEmail(0, 0, email1Update);
      const newState4 = emibInbox(newState3, updateAction1);
      expect(newState4.emailActions[0]).toEqual([
        { ...email1Update, actionType: ACTION_TYPE.email },
        { ...email2, actionType: ACTION_TYPE.email },
        { ...email3, actionType: ACTION_TYPE.email }
      ]);
      //Update second email
      const updateAction2 = updateEmail(0, 1, email2Update);
      const newState5 = emibInbox(newState4, updateAction2);
      expect(newState5.emailActions[0]).toEqual([
        { ...email1Update, actionType: ACTION_TYPE.email },
        { ...email2Update, actionType: ACTION_TYPE.email },
        { ...email3, actionType: ACTION_TYPE.email }
      ]);
      //update third email
      const updateAction3 = updateEmail(0, 2, email3Update);
      const newState6 = emibInbox(newState5, updateAction3);
      expect(newState6.emailActions[0]).toEqual([
        { ...email1Update, actionType: ACTION_TYPE.email },
        { ...email2Update, actionType: ACTION_TYPE.email },
        { ...email3Update, actionType: ACTION_TYPE.email }
      ]);
      //delete second email
      const deleteAction1 = deleteEmail(0, 1);
      const newState7 = emibInbox(newState6, deleteAction1);
      expect(newState7.emailActions[0]).toEqual([
        { ...email1Update, actionType: ACTION_TYPE.email },
        { ...email3Update, actionType: ACTION_TYPE.email }
      ]);
      //delete first email
      const deleteAction2 = deleteEmail(0, 0);
      const newState8 = emibInbox(newState7, deleteAction2);
      expect(newState8.emailActions[0]).toEqual([
        { ...email3Update, actionType: ACTION_TYPE.email }
      ]);
      //delete first email again (originally the third)
      const deleteAction3 = deleteEmail(0, 0);
      const newState9 = emibInbox(newState8, deleteAction3);
      expect(newState9.emailActions[0]).toEqual([]);
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
