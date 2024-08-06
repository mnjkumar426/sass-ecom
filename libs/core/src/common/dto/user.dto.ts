export interface UserDTO {
  id: string;
  username: string;
  email: string;
  password?: string;
}

export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  username?: string;
  email?: string;
  password?: string;
}
