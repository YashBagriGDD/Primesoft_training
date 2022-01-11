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
  summary?: string;
}

export type PostsState = {
  posts: {
    list: RollCallCardInterface[];
  };
  user: {
    username: string | null;
    password: string | null;
    isLoggedIn: boolean;
  };
};
