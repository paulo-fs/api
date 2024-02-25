import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositorie';
import { CategoriesRepository } from './repositories/categories.repositorie';
import { BankAccountsRepository } from './repositories/bankAccounts.repositorie';
import { TransactionsRepository } from './repositories/transactions.repositorie';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
