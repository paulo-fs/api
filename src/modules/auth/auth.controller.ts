import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() authenticateDto: SigninDto) {
    return this.authService.signin(authenticateDto);
  }

  @Post('signup')
  create(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }
}
