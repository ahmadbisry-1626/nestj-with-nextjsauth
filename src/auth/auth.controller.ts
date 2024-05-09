import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDtoCenah } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) { }

    @Post('register')
    async registerUser(@Body(ValidationPipe) user: CreateUserDtoCenah) {
        return await this.userService.create(user)
    }

    @Post('login')
    async login(@Body(ValidationPipe) userLogin: LoginDto) {
        return await this.authService.login(userLogin)
    }
}
