import { ConflictException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDtoCenah } from './dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) { }

  async create(createUserDto: CreateUserDtoCenah) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email
      }
    })

    if (user) throw new ConflictException('Email already exists')

    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 10)
      }
    })

    const { password, ...result } = newUser

    return result
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email }
    })
  }


}
