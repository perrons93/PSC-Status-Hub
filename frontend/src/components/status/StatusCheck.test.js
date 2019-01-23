import React from 'react';
import { shallow } from 'enzyme';
import StatusCheck from './StatusCheck.jsx';

it('renders description', () => {
  const wrapper = shallow(<StatusCheck isPassing={false} description={'hello world'}/>);
  const description = 'hello world';
  expect(wrapper.contains(description)).toEqual(true);
});
