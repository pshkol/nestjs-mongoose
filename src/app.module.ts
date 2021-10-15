import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    NotesModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
})
export class AppModule {}
