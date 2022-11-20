import React, { ReactElement } from 'react';
export type DonerType = {
  id: number;
  first_name: string; last_name: string;
  blood: string;
  phone: string;
  joined: string;
  district: string;
  is_available: boolean;
  is_admin: boolean;
  last_donate:string,
  avatar: string | {};
}
export type PrimaryBtnProps = {
  bg?: string,
  color?: string,
  children: React.ReactNode,
  className?: string
}
export type ProfileInputs = {
  first_name: string, last_name: string,
  city: string, street: string, state: string, country: string
  phone: number, dob: Date, lastDonate: Date, blood: string, available: boolean,
}
export type TooltipType = {
  children: React.ReactNode,
  direction?: 'left' | 'right' | 'top' | 'bottom',
  content: string | ReactElement,
  delay?: number,
  className?: string
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}