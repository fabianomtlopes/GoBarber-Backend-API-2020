import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProvidersMonthAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { provider_id } = req.params;
    const { month, year } = req.query;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return res.json(availability);
  }
}
