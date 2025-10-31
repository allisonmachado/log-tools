import { Exclude, Expose } from 'class-transformer';

export class FamilyDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
