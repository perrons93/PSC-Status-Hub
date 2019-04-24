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
  initialTaskContent,
  taskContent,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;

  if (
    initialTaskContent !== taskContent ||
    initialReasonsForActionContent !== reasonsForActionContent
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

function isEmailFormEdited(
  initialEmailType,
  emailType,
  initialEmailTo,
  emailTo,
  initialEmailCc,
  emailCc,
  initialEmailResponse,
  emailResponse,
  initialReasonsForActionContent,
  reasonsForActionContent
) {
  let isEdited = false;
  const initialEmailToArray = typeof initialEmailTo === "undefined" ? "" : initialEmailTo;
  const emailToArray = typeof emailTo === "undefined" ? "" : emailTo;
  const initialEmailCcArray = typeof initialEmailCc === "undefined" ? "" : initialEmailCc;
  const emailCcArray = typeof emailCc === "undefined" ? "" : emailCc;

  if (
    initialEmailType !== emailType ||
    initialEmailToArray.toString() !== emailToArray.toString() ||
    initialEmailCcArray.toString() !== emailCcArray.toString() ||
    initialEmailResponse !== emailResponse ||
    initialReasonsForActionContent !== reasonsForActionContent
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

export default isEmailFormEmpty;
export { isTaskFormEmpty, isTaskFormEdited, isEmailFormEdited };
