export type ClientFormInitialValues = {
  "full-name": string;
  email: string;
  password: string;
  gender: string;
  "phone-number": string;
  website: string;
};

export type TalentFormInitialValues = {
  "last-name": string;
  "first-name": string;
  gender: string;
  email: string;
  password: string;
  "confirm-password": string;
  "phone-number": string;
  skills: string;
  portfolio: string;
  profession: string;
  location: string;
  bio: string;
};

export type ChangeEvent = {
  (e: React.ChangeEvent<any>): void;
  <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
};
