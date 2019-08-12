// import {ReactuiClientManagement} from './app/module/client/ReactuiClientManagement';
export interface RouteInfo {
  pathPattern: string;
  menuLink: string;
  component: any;
  caption: string;
}

export const mainRoutes: RouteInfo[] = [];

// mainRoutes.push({
//   pathPattern: '/reactuiClientManagement/:entityId?',
//   menuLink: '/reactuiClientManagement',
//   component: ReactuiClientManagement,
//   caption: 'ReactuiClientManagement'
// });