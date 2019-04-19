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
  return { text: contact.name + " (" + contact.role + ")", value: contact.id };
}
