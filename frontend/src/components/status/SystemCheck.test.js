import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'react-bootstrap';
import SystemCheck from './SystemCheck.jsx';

const failingMessage = <Label>Fail</Label>;
const passingMessage = <Label>Pass</Label>;

it('renders description', () => {
  const wrapper = shallow(<SystemCheck isPassing={false} description={'hello world'}/>);
  const description = 'hello world';
  expect(wrapper.contains(description)).toEqual(true);
});

it('renders Fail when isPassing is false', () => {
  const wrapper = shallow(<SystemCheck isPassing={false} description={'hello world'}/>);
  expect(wrapper.contains(failingMessage)).toEqual(true);
  expect(wrapper.contains(passingMessage)).toEqual(false);
});

it('renders Pass when isPassing is true', () => {
  const wrapper = shallow(<SystemCheck isPassing={true} description={'hello world'}/>);
  expect(wrapper.contains(failingMessage)).toEqual(false);
  expect(wrapper.contains(passingMessage)).toEqual(true);
});

it('renders screenResolutionDetected', () => {
  const wrapper = shallow(<SystemCheck isPassing={true} description={'hello world'} screenResolutionDetected={'1920x1040'}/>);
  const screenResolutionDetected = '1920x1040';
  expect(wrapper.contains(screenResolutionDetected)).toEqual(true);
});

it('renders browserDetected', () => {
  const wrapper = shallow(<SystemCheck isPassing={true} description={'hello world'} browserDetected={'chrome'}/>);
  const browserDetected = 'chrome';
  expect(wrapper.contains(browserDetected)).toEqual(true);
});

it('renders javaScriptEnabled', () => {
  const wrapper = shallow(<SystemCheck isPassing={true} description={'hello world'} javaScriptEnabled={'Enabled'}/>);
  const javaScriptEnabled = 'Enabled';
  expect(wrapper.contains(javaScriptEnabled)).toEqual(true);
});
