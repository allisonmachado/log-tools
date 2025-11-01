import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LogRecordDto } from 'src/dtos/log-record.dto';
import { LogsService } from 'src/services/family.service';

@Controller('logs')
export class LogController {
  constructor(private logService: LogsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  createLogRecord(@Body() logRecord: LogRecordDto) {
    this.logService.logMessage(logRecord);
  }
}
