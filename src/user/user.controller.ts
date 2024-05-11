import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseGuards(JwtGuard)
  @Get(":id")
  async getUserprofile(@Param("id") id: string) {
    return await this.userService.findByById(id)
  }
}
