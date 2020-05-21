// Persistencia <-> Repositories <-> Rota
import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notifications from '../schemas/Notifications';

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notifications>;

  constructor() {
    this.ormRepository = getMongoRepository(Notifications, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notifications> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });

    await this.ormRepository.save(notification);
    return notification;
  }
}

export default NotificationsRepository;
