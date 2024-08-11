export type ClientFormInitialValues = {
  "full-name": string;
  email: string;
  password: string;
  gender: string;
  "phone-number": string;
  website: string;
};

export type TalentFormInitialValues = {
  "full-name": string;
  email: string;
  password: string;
  "phone-number": string;
  profession: string;
  location: string;
  gender: string;
  skills: string;
  portfolio: string;
  bio: string;
};

export type ChangeEvent = {
  (e: React.ChangeEvent<any>): void;
  <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}