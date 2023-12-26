import { Type } from '@angular/core';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Skill = {
  name: string;
  size: Size;
};

// TODO add link to items that are not well known (Non-duality & Typing)
export type Hobby = {
  key: string;
  size: Size;
  link?: string;
};

export type NavItem = {
  titleKey: string;
  route: string;
};

export type Language = {
  flag: string;
  name: string;
}

export type Medium = {
  link: string;
  component: Type<any>;
}
