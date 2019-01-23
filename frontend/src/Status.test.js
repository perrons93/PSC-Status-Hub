import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Status from './Status.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Status />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders initial message', () => {
  const wrapper = shallow(<Status />);
  const initialMessage = <p>{'Internal status page to quickly determine thestatus / health of the Compotency Assessment Tool.'}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
