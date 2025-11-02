import { Injectable, Logger } from '@nestjs/common';
import { LogRecordDto } from 'src/dtos/log-record.dto';

@Injectable()
export class LogsService {
  private readonly logger = new Logger(LogsService.name, {
    timestamp: true,
  });

  private readonly registeredLevels: {
    level: string;
    fn: (message: string) => void;
  }[] = [];

  private readonly defaultLogLevelFn: (msg: string) => void;

  constructor() {
    this.registeredLevels = [
      { level: 'error', fn: (msg: string) => this.logger.error(msg) },
      { level: 'log', fn: (msg: string) => this.logger.log(msg) },
      { level: 'warn', fn: (msg: string) => this.logger.warn(msg) },
      { level: 'debug', fn: (msg: string) => this.logger.debug(msg) },
      { level: 'verbose', fn: (msg: string) => this.logger.verbose(msg) },
    ];

    this.defaultLogLevelFn = (msg: string) => this.logger.log(msg);
  }

  logMessage(logRecord: LogRecordDto) {
    const logLevelFn = this.registeredLevels.find(
      (l) => l.level === logRecord.level,
    ) || { fn: this.defaultLogLevelFn };

    logLevelFn.fn(logRecord.message);
  }
}
