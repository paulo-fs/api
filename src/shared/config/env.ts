import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_URL: string;
}

export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length) {
  throw new Error(JSON.stringify(errors, null, 2));
}
