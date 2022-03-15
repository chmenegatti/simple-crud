import ICreateUserDTO from '../dto/ICreateUserDTO';
import { Users } from '../entities/Users';

export default interface IUsersRepository {
  findAll(): Promise<Users[]>;

  findById(id: string): Promise<Users | undefined>;

  findByEmail(email: string): Promise<Users | undefined>;

  create(data: ICreateUserDTO): Promise<Users>;

  save(user: Users): Promise<Users>;
}
