import AppError from '@infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Users } from '../entities/Users';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email }: IRequest): Promise<Users> {
    const checkIfUserExists = await this.usersRepository.findByEmail(email);

    if (checkIfUserExists) {
      throw new AppError('Email address already used.');
    }

    const newUser = await this.usersRepository.create({ name, email });

    return newUser;
  }
}

export default CreateUserService;
