import { Injectable } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bankAccounts.repositorie';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountsRepo: BankAccountsRepository,
    private readonly validateBankAccountService: ValidateBankAccountOwnershipService,
  ) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, type, initialBalance, name } = createBankAccountDto;

    return this.bankAccountsRepo.create({
      data: {
        userId,
        color,
        type,
        initialBalance,
        name,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountsRepo.findMany({ where: { userId } });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    await this.validateBankAccountService.validate(userId, bankAccountId);

    const { color, type, initialBalance, name } = updateBankAccountDto;

    return this.bankAccountsRepo.update({
      where: { id: bankAccountId },
      data: {
        color,
        type,
        initialBalance,
        name,
      },
    });
  }

  async remove(userId: string, bankAccountId: string) {
    await this.validateBankAccountService.validate(userId, bankAccountId);

    await this.bankAccountsRepo.delete({
      where: { id: bankAccountId },
    });

    return;
  }
}
