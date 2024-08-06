import { LoginDTO, RegisterDTO, TokenDTO } from '../dto/auth.dto';

export interface IAuthService {
  login(data: LoginDTO): Promise<TokenDTO>;
  register(data: RegisterDTO): Promise<TokenDTO>;
  refreshToken(token: string): Promise<TokenDTO>;
}
