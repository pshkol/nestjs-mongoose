import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from '../dtos/createNote.dto';
import { UpdateNoteDto } from '../dtos/updateNote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from '../schemas/note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  getNotes() {
    return this.noteModel.find();
  }

  getOne(id: string) {
    return this.noteModel.findById(id);
  }

  createNote(note: CreateNoteDto): Promise<Note> {
    const newNote = new this.noteModel(note);
    return newNote.save();
  }

  createManyNotes(notes: CreateNoteDto[]) {
    notes.forEach((item) => {
      return new this.noteModel(item).save();
    });
  }

  updateNote(id: string, data: UpdateNoteDto) {
    return this.noteModel.findByIdAndUpdate(id, data);
  }

  deleteNote(id: string) {
    return this.noteModel.deleteOne({ _id: id });
  }
}
