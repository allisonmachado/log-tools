import { Module } from '@nestjs/common';
import envVarsConfig from './config/env-vars.config';
import { LogController } from './controllers/log.controller';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { LogsService } from './services/family.service';

@Module({
  imports: [envVarsConfig(), JwtModule.register({}), HttpModule],
  controllers: [LogController],
  providers: [LogsService],
})
export class AppModule {}
