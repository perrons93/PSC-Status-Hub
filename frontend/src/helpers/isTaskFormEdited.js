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

  if (
    initialEmailType !== emailType ||
    initialEmailTo !== emailTo ||
    initialEmailCc !== emailCc ||
    initialEmailResponse !== emailResponse ||
    initialReasonsForActionContent !== reasonsForActionContent
  ) {
    isEdited = true;
  } else {
    isEdited = false;
  }
  return isEdited;
}

export default isTaskFormEdited;
export { isEmailFormEdited };
