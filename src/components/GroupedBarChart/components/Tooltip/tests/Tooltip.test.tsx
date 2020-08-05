import React from 'react';
import {mount} from '@shopify/react-testing';
import {Color} from 'types';

import {Tooltip} from '../Tooltip';

describe('<Tooltip/>', () => {
  const mockProps = {
    colors: ['colorPurple', 'colorRed'] as Color[],
    labels: ['Purple label', 'Red label'],
    values: [1, 2],
    formatValue: (value: number) => `$${value}`,
  };

  it('renders labels', () => {
    const tooltip = mount(<Tooltip {...mockProps} />);

    expect(tooltip).toContainReactText('Purple label');
    expect(tooltip).toContainReactText('Red label');
  });

  it('renders formatted values', () => {
    const tooltip = mount(<Tooltip {...mockProps} />);

    expect(tooltip).toContainReactText('$1');
    expect(tooltip).toContainReactText('$2');
  });

  it('renders color previews', () => {
    const tooltip = mount(<Tooltip {...mockProps} />);

    expect(tooltip).toContainReactComponent('div', {
      style: {background: 'rgb(156, 106, 222)'},
    });
    expect(tooltip).toContainReactComponent('div', {
      style: {background: 'rgb(222, 54, 24)'},
    });
  });
});