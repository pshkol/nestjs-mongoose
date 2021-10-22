import { IsString } from 'class-validator';

export class UpdateNoteDto {
  @IsString()
  title?: string;

  @IsString()
  text?: string;
}
