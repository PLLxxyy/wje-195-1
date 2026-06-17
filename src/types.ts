export interface WheelOption {
  id: string;
  text: string;
  color: string;
  remark: string;
}

export interface WheelScheme {
  id: string;
  name: string;
  options: WheelOption[];
  mode: DrawMode;
}

export type DrawMode = 'wheel' | 'tube' | 'dice';

export interface HistoryRecord {
  id: string;
  schemeId: string;
  schemeName: string;
  result: string;
  resultColor: string;
  resultRemark: string;
  mode: DrawMode;
  timestamp: number;
}
