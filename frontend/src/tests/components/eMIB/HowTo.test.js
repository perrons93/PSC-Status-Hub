import React from "react";
import { shallow } from "enzyme";
import HowTo, { getHowToPages } from "../../../components/eMIB/HowTo";
import { LANGUAGES } from "../../../components/commons/Translation";
import ProgressPane from "../../../components/commons/ProgressPane";
import SideNavigation from "../../../components/commons/SideNavigation";
import LOCALIZE from "../../../text_resources";

const SPECS = getHowToPages();

it("renders ProgressPane within HowTo when inTest=false", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<HowTo inTest={false} />);
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
  const wrapper = shallow(<HowTo inTest={true} />);
  const sideNavigation = <SideNavigation navSpecs={SPECS} currentNode={0} />;
  expect(wrapper.contains(sideNavigation)).toEqual(true);
});
