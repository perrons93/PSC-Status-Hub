function isEmailFormEmpty(emailType, emailTo, emailCc, emailResponse, reasonsForActionContent) {
  let isEmpty = false;

  if (
    emailType === "" &&
    emailTo === "" &&
    emailCc === "" &&
    emailResponse === "" &&
    reasonsForActionContent === ""
  ) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}

function isTaskFormEmpty(taskContent, reasonsForActionContent) {
  let isEmpty = false;

  if (taskContent === "" && reasonsForActionContent === "") {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}

function isTaskFormEdited(
  taskContentType,
  initialTaskContent,
  taskContent,
  reasonsForActionContentType,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;

  if (
    (initialTaskContent !== taskContent ||
      initialReasonsForActionContent !== reasonsForActionContent) &&
    (taskContentType !== "undefined" && reasonsForActionContentType !== "undefined")
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

function isEmailFormEdited(
  emailTypeType,
  initialEmailType,
  emailType,
  emailToType,
  initialEmailTo,
  emailTo,
  emailCcType,
  initialEmailCc,
  emailCc,
  emailResponseType,
  initialEmailResponse,
  emailResponse,
  reasonsForActionContentType,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;

  if (
    (initialEmailType !== emailType ||
      initialEmailTo !== emailTo ||
      initialEmailCc !== emailCc ||
      initialEmailResponse !== emailResponse ||
      initialReasonsForActionContent !== reasonsForActionContent) &&
    (emailTypeType !== "undefined" &&
      emailToType !== "undefined" &&
      emailCcType !== "undefined" &&
      emailResponseType !== "undefined" &&
      reasonsForActionContentType !== "undefined")
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

export default isEmailFormEmpty;
export { isTaskFormEmpty, isTaskFormEdited, isEmailFormEdited };
