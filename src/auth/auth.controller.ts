import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateUserDtoCenah } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { RefreshGuard } from './guards/refresh.guard';

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

    @UseGuards(RefreshGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req.user)
    }
}
