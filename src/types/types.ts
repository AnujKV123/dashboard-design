interface CityStat {
  name: string;
  value: number;
  max: number;
}

export interface PieChartItem {
  name: string;
  value: number;
  fill: string;
}

export interface PieChartConfigItem {
  label: string;
}

export interface Invoice {
  name: string;
  price: string;
  quantity: string;
  amount: string;
}

export interface LineBarChartItem {
  month: string;
  current: number;
  previous: number;
}

export interface LineBarChartConfigItem {
  label: string;
  color: string;
}

export interface Marker {
  name: string;
  coordinates: [number, number];
}

export interface CombinedData {
  cityStats: CityStat[];
  pieChart: {
    data: PieChartItem[];
    config: Record<string, PieChartConfigItem>;
  };
  invoices: Invoice[];
  lineChart: {
    data: LineBarChartItem[];
    config: Record<string, LineBarChartConfigItem>;
  };
  barChart: {
    data: LineBarChartItem[];
    config: Record<string, LineBarChartConfigItem>;
  };
  markers: Marker[];
}