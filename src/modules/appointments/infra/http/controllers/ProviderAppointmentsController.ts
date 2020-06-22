import { Response, Request } from 'express';
import { container } from 'tsyringe';
// import { classToClass } from 'class-transformer';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProvidersAppointmentsService';

// interface IRequest extends Request {
//   user: {
//     id: string;
//   };
// }

export default class ProviderAppointmentsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const provider_id = req.user.id;
    const { day, month, year } = req.query;

    const listProviderAppointments = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointments.execute({
      provider_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return res.json(appointments);
    // return res.json(classToClass(appointments));
  }
}
