import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/updateUserDto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser);
  }

  @Put()
  updateUser(@Body('id') id: string, @Body('data') data: UpdateUserDto) {
    return this.userService.updateUser(id, data);
  }

  @Delete()
  deleteUser(@Body('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
