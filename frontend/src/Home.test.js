import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders initial message from backend', () => {
  const wrapper = shallow(<Home />);
  const initialMessage = <p>Welcome to the Compotency Assessment Tool.</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
