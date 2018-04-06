/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('about component without problem', () => {
    const component = shallow(<About />);
    expect(component).to.exist;
  });

  it('About component in test', () => {
    const component = shallow(<About />);
    expect(component.find('.about').exists()).to.equal(true);
  });

  it('About component in test2', () => {
    const component = shallow(<About />);
    expect(component.find('.about2').exists()).to.equal(true);
  });
});
/* eslint-enable */