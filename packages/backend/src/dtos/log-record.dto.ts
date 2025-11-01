import { IsDefined, IsString, IsIn } from 'class-validator';

export class LogRecordDto {
  @IsDefined()
  @IsString()
  message: string;

  @IsDefined()
  @IsString()
  @IsIn(['error', 'log', 'warn', 'debug', 'verbose'])
  level: string;
}
