export interface Event {
    year: number;
    title: string;
    description: string;
  }
  
  export interface TimePeriod {
    startYear: number;
    endYear: number;
    category: string;
    events: Event[];
  }