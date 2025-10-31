import { Module } from '@nestjs/common';
import envVarsConfig from './config/env-vars.config';
import { UserController } from './controllers/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [envVarsConfig(), JwtModule.register({}), HttpModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
