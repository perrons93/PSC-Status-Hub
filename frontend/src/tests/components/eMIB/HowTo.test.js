import React from "react";
import { mount } from "enzyme";
import HowTo, { SPECS } from "../../../components/eMIB/HowTo";
import { LANGUAGES } from "../../../components/commons/Translation";
import ProgressPane from "../../../components/commons/ProgressPane";
import SideNavigation from "../../../components/commons/SideNavigation";
import LOCALIZE from "../../../text_resources";

it("renders ProgressPane within HowTo when inTest=false", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<HowTo inTest={false} />);
  const progressPane = (
    <ProgressPane
      progressSpecs={SPECS}
      currentNode={0}
      paneTitle={LOCALIZE.emibTest.homePage.testTitle}
    />
  );
  expect(wrapper.contains(progressPane)).toEqual(true);
});

it("renders SideNavigation within HowTo when in test=true", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<HowTo inTest={true} />);
  const sideNavigation = <SideNavigation navSpecs={SPECS} currentNode={0} />;
  expect(wrapper.contains(sideNavigation)).toEqual(true);
});
