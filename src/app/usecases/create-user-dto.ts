export interface CreateUserDtoInput {
    email: string;
    password: string;
    address?: {
      street: string;
      number: number;
      zip: string;
      city: string;
    };
  }
  
  export interface CreateUserDtoOutput {
    id: string;
    email: string;
    address?: {
      street: string;
      number: number;
      zip: string;
      city: string;
    };
  }

  export interface changeEmailInput {
    currentEmail: string;
    newEmail: string;
  }