import PropTypes from "prop-types";

// Display
export const HEADER_HEIGHT = 130;
export const FOOTER_HEIGHT = 72;

// Data structure
export const ACTION_TYPE = {
  email: "email",
  task: "task"
};

export const EDIT_MODE = {
  create: "create",
  update: "update"
};

export const EMAIL_TYPE = {
  reply: "reply",
  replyAll: "reply all",
  forward: "forward"
};

export const emailShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  to: PropTypes.string,
  from: PropTypes.string,
  subject: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string
});

export const actionShape = PropTypes.shape({
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPE)).isRequired,
  reasonForAction: PropTypes.string,
  task: PropTypes.string,
  emailType: PropTypes.oneOf(Object.values(EMAIL_TYPE)),
  emailTo: PropTypes.string,
  emailCc: PropTypes.string,
  emailBody: PropTypes.string
});
