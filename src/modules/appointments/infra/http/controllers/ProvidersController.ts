import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer'; // para serialização

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

interface IRequest extends Request {
  user: {
    id: string;
  };
}

export default class ProvidersController {
  public async index(req: IRequest, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      user_id,
    });

    return res.json(classToClass(providers));
  }
}
