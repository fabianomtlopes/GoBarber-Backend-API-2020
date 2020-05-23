import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateService = container.resolve(AuthenticateUserService);
    const { user, token } = await authenticateService.execute({
      email,
      password,
    });

    return res.json({ user: classToClass(user), token });
  }
}
