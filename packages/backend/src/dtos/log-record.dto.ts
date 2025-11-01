import { IsDefined, IsString } from 'class-validator';

export class LogRecordDto {
  @IsDefined()
  @IsString()
  message: string;

  @IsDefined()
  @IsString()
  level: string;
}
