// transform address book into list of options
export function transformAddressBook(addressBook) {
  let options = [{ text: "None", value: null }];
  for (let contact of addressBook) {
    options.push(transformContact(contact));
  }
  return options;
}

// transform contact shape into options shape
export function transformContact(contact) {
  return { text: transformContactName(contact), value: contact.id };
}

// transform contact shape a display name
export function transformContactName(contact) {
  return contact.name + " (" + contact.role + ")";
}

// Get the transformed name, or an empty string if it is not found
export function contactNameFromId(addressBook, id) {
  for (let contact of addressBook) {
    if (contact.id === id) {
      return transformContactName(contact.name);
    }
  }
  return "";
}
