import { IsObject, IsString } from 'class-validator';

export class CreateManyNotesDto {
  @IsString()
  userId: string;
  @IsObject()
  data: {
    title: string[];
    text: string[];
  };
}
