import {Series} from 'd3-shape';
import {Color} from 'types';

export interface Data {
  data: number[];
  color: Color;
  highlightColor?: Color;
  label: string;
}

export type StackSeries = Series<
  {
    [key: string]: number;
  },
  string
>;