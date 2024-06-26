import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, DatabaseModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
