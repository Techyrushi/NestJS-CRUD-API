/* eslint-disable prettier/prettier */
export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};

export type CreateUserOrderParams = {
  p_name: string;
  p_description: string;
  p_amount: string;
};

