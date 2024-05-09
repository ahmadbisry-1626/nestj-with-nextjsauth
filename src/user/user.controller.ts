import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { CreateUserDtoCenah } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Post()
  // async create(@Body(ValidationPipe) createUserDto: CreateUserDtoCenah) {
  //   return await this.userService.create(createUserDto);
  // }
}
