import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '../dto/ICreateUserDTO';
import IUsersRepository from './IUsersRepository';
import { Users } from '../entities/Users';

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async create(userData: ICreateUserDTO): Promise<Users> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findAll(): Promise<Users[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async save(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
