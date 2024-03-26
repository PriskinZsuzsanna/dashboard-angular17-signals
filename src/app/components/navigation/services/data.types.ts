export interface Data {
  title: string,
  timeframes: Timeframe,
  background: string,
  icon: string;
}

export interface Timeframe {
  daily: Numbers,
  monthly: Numbers,
  weekly: Numbers
}

export interface Numbers {
  current: number,
  previous: number 
}

export enum FilterEnum {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly'
}