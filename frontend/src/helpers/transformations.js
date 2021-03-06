// transform addressBook (list of contactShapes) into a list of display names (optionShapes)
export function transformAddressBook(addressBook) {
  let options = [{ text: "None", value: null }];
  for (let contact of addressBook) {
    options.push(transformContact(contact));
  }
  return options;
}

// transform contactShape into optionShapes
export function transformContact(contact) {
  return { text: transformContactName(contact), value: contact.id };
}

// transform contactShape a display name for the optionShape
export function transformContactName(contact) {
  return contact.name + " (" + contact.role + ")";
}

// Get the transformed name, or an empty string if it is not found
export function contactNameFromId(addressBook, id) {
  for (let contact of addressBook) {
    if (contact.id === id) {
      return transformContactName(contact);
    }
  }
  return "";
}
