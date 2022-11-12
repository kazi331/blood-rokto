import React from 'react';
export type DonerType = {
  id: number;
  fname: string; lname: string;
  phone_number: string;
  date_joined: string;
  city: string;
  is_available: boolean;
  avatar: string;
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
  direction?: string,
  content: string,
  delay?: number,
  className?: string
}