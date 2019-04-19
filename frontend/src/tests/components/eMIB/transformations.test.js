import React from "react";
import { transformAddressBook, transformContact } from "../../../components/eMIB/transformations";

it("Check transformContact", () => {
  const contact = { id: 100, name: "Bob WhatHisName", role: "He Works Here" };
  const option = { text: "Bob WhatHisName (He Works Here)", value: 100 };
  expect(transformContact(contact)).toEqual(option);
});

it("Check transformContact", () => {
  const addressBook = [
    { id: 0, name: "Joe", role: "Developer" },
    { id: 1, name: "Bob", role: "Developer" },
    { id: 2, name: "Smithers", role: "Butler" },
    { id: 3, name: "Arthur", role: "King of Britain" },
    { id: 4, name: "Richard", role: "Lionheart" },
    { id: 5, name: "Robert", role: "The Bruce" }
  ];
  const options = [
    { text: "None", value: null },
    { text: "Joe (Developer)", value: 0 },
    { text: "Bob (Developer)", value: 1 },
    { text: "Smithers (Butler)", value: 2 },
    { text: "Arthur (King of Britain)", value: 3 },
    { text: "Richard (Lionheart)", value: 4 },
    { text: "Robert (The Bruce)", value: 5 }
  ];
  expect(transformAddressBook(addressBook)).toEqual(options);
});
