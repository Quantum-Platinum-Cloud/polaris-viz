import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Sparkline, SparklineProps} from '../..';
import {primaryColor, secondaryColor} from '../../../utilities';

const series = [
  {
    color: primaryColor,
    areaStyle: 'gradient',
    hasPoint: true,
    data: [
      {x: 0, y: 100},
      {x: 1, y: 200},
      {x: 2, y: 300},
      {x: 3, y: 400},
      {x: 4, y: 400},
      {x: 5, y: 1000},
      {x: 6, y: 200},
      {x: 7, y: 800},
      {x: 8, y: 900},
      {x: 9, y: 200},
      {x: 10, y: 400},
    ],
  },
  {
    color: secondaryColor,
    areaStyle: 'none',
    lineStyle: 'dashed',
    data: [
      {x: 0, y: 10},
      {x: 1, y: 20},
      {x: 2, y: 30},
      {x: 3, y: 40},
      {x: 4, y: 40},
      {x: 5, y: 400},
      {x: 6, y: 20},
      {x: 7, y: 80},
      {x: 8, y: 90},
      {x: 9, y: 20},
      {x: 10, y: 40},
    ],
  },
];

export default {
  title: 'Sparkline',
  component: Sparkline,
  decorators: [
    (Story: any) => (
      <div style={{width: '100px', height: '50px'}}>{Story()}</div>
    ),
  ],
  argTypes: {},
} as Meta;

const Template: Story<SparklineProps> = (args: SparklineProps) => {
  return (
    <div style={{width: '200px', height: '100px'}}>
      <Sparkline {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  series,
  isAnimated: true,
};
export const hasSpline = Template.bind({});
hasSpline.args = {
  series,
  isAnimated: true,
  hasSpline: true,
};

export const OffsetAndNulls = Template.bind({});
OffsetAndNulls.args = {
  series: [
    {
      color: 'darkModePositive',
      areaStyle: 'gradient',
      hasPoint: true,
      offsetRight: 12,
      offsetLeft: 50,
      data: [
        {x: 0, y: 100},
        {x: 1, y: 50},
        {x: 2, y: null},
        {x: 3, y: 200},
        {x: 4, y: 400},
        {x: 5, y: 1000},
        {x: 6, y: 200},
        {x: 7, y: 800},
        {x: 8, y: 900},
        {x: 9, y: 200},
        {x: 10, y: 100},
      ],
    },
    {
      color: 'darkModePositive',
      areaStyle: 'none',
      lineStyle: 'dashed',
      data: [
        {x: 0, y: 20},
        {x: 1, y: 20},
        {x: 2, y: 20},
        {x: 3, y: 20},
        {x: 4, y: 20},
        {x: 5, y: 20},
        {x: 6, y: 20},
        {x: 7, y: 20},
        {x: 8, y: 20},
        {x: 9, y: 20},
        {x: 10, y: 20},
      ],
    },
  ],
  isAnimated: true,
};
