import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LogRecordDto } from 'src/dtos/log-record.dto';

@Controller('logs')
export class LogController {
  private readonly logger = new Logger(LogController.name, {
    timestamp: true,
  });

  constructor() {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  createLogRecord(@Body() logRecord: LogRecordDto) {
    this.logger.log(logRecord.message);
  }
}
