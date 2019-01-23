import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import StatusCheck from './StatusCheck';
import { Label } from 'react-bootstrap';

it('renders description', () => {
  const wrapper = shallow(<StatusCheck isPassing={false} description={"hello world"}/>);
  const description = "hello world";
  expect(wrapper.contains(description)).toEqual(true);
});
