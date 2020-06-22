// import uploadConfig from '@config/upload';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersResporitory';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import User from '@modules/users/infra/typeorm/entities/User';
import { classToClass } from 'class-transformer'; // para serialização

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    // para limpar o cache, desabilitar a linha abaixo e bloquear as linhas acima
    // let users;

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      // console.log('A Query no banco foi feita');

      await this.cacheProvider.save(
        `providers-list:${user_id}`,
        classToClass(users),
      );
    }

    return users;
  }
}

export default ListProvidersServices;
