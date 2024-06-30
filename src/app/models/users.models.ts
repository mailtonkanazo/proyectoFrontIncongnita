export interface User {
  name?: string;
  lastname?: string;
  identification?: number;
  email: string;
  password: string;
  movil?: string;
}

export interface Token {
  success:string
  token: string
 }
