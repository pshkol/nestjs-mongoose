import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CreateManyNotesDto } from '../dtos/createManyNotes.dto';
import { CreateNoteDto } from '../dtos/createNote.dto';

@Injectable()
export class TransformNotesPipe implements PipeTransform {
  transform(value: CreateManyNotesDto, metadata: ArgumentMetadata) {
    const transformed: CreateNoteDto[] = [];
    value.data.title.forEach((item, index) => {
      transformed.push({
        userId: value.userId,
        title: value.data.title[index],
        text: value.data.text[index],
      });
    });
    return transformed;
  }
}
