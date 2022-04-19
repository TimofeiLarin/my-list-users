import React from 'react';
import List from '../pages/List';
import Profile from '../pages/Profile';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RoutesName {
  LIST = '/',
  PROFILE = '/profile',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesName.LIST, component: List },
  { path: RoutesName.PROFILE, component: Profile },
];
