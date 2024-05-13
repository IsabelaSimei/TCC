import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import IFindAllUsersContactsDTO from '@modules/users/dtos/IFindAllUsersContactsDTO';
import Users from '../infra/typeorm/entities/User';

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
  }: IFindAllUsersContactsDTO): Promise<Users[]> {
    const contacts = await this.usersRepository.listAllUsersContacts({
      user_id,
    });

    if (!contacts) {
      throw new AppError('Not Have contact');
    }

    return contacts;
  }
}

export default ListProvidersService;
