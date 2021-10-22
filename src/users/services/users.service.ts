import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  createUser(data: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }

  updateUser(id: string, data: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, data);
  }

  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
