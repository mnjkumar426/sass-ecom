import { UserDTO, CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';

export interface IUserService {
  createUser(data: CreateUserDTO): Promise<UserDTO>;
  updateUser(id: string, data: UpdateUserDTO): Promise<UserDTO>;
  deleteUser(id: string): Promise<void>;
  getUserById(id: string): Promise<UserDTO>;
  getAllUsers(): Promise<UserDTO[]>;
}
