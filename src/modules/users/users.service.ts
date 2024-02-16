import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositorie';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}
}
