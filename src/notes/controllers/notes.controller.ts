import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { CreateNoteDto } from '../dtos/createNote.dto';
import { UpdateNoteDto } from '../dtos/updateNote.dto';
import { Note } from '../schemas/note.schema';
import { TransformNotesPipe } from '../pipes/transformNotes.pipe';
import { NotFoundError } from 'rxjs';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('getAll')
  getAll() {
    return this.notesService
      .getNotes()
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new NotFoundError('No se encontraron las notas');
      });
  }

  @Get('getOne')
  getOne(@Body('id') id: string) {
    return this.notesService
      .getOne(id)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new NotFoundError(`Nota con el id = ${id} no fue encontrada`);
      });
  }

  @Post('create')
  createNote(@Body() note: CreateNoteDto): Promise<Note> {
    return this.notesService.createNote(note);
  }

  @Post('createMany')
  createManyNotes(@Body(TransformNotesPipe) data: CreateNoteDto[]) {
    return this.notesService.createManyNotes(data);
  }

  @Put('update')
  updateNote(@Body('id') id: string, @Body('data') data: UpdateNoteDto) {
    return this.notesService.updateNote(id, data);
  }

  @Delete('delete')
  deleteNote(@Body('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}
