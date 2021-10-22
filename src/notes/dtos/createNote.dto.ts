import { IsMongoId, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsMongoId()
  userId: string;
}
