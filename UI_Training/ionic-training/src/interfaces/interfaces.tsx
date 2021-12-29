export interface CardInterface {
  header: string;
  content: string;
  [key: string]: any;
}

export interface RouteInterface {
  name: string;
  path: string;
  component: React.FC<{}>;
  icon: string;
  sidebarRender?: boolean;
}

export interface RollCallCardInterface {
  state: string;
  billNum: string;
  name: string;
  endDate: string;
  isSoftRollCall?: boolean;
}
