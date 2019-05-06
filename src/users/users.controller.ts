import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Body,
  UseFilters
} from '@nestjs/common'

import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter'

import { UsersService } from './users.service'

import { CreateUserDto } from './dtos/create-user.dto'
import { ConnectUserDto } from './dtos/connect-user.dto'
import { UserIdDto } from './dtos/user-id.dto'
import { IsEmailExistingDto } from './dtos/is-email-existing.dto'
import { IsLoginExistingDto } from './dtos/is-login-existing.dto'

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @Post('/connection')
  connectUser(@Body() connectUserDto: ConnectUserDto) {
    return this.usersService.connectUser(connectUserDto)
  }

  @Get('/isEmailExisting')
  isEmailExisting(@Body() isEmailExistingDto: IsEmailExistingDto) {
    return this.usersService.isEmailExisting(isEmailExistingDto)
  }

  @Get('/isLoginExisting')
  isLoginExisting(@Body() isLoginExistingDto: IsLoginExistingDto) {
    return this.usersService.isLoginExisting(isLoginExistingDto)
  }

  @Get('/:userId')
  fetchUser(@Param('userId') userId: UserIdDto) {
    return this.usersService.fetchUser(userId)
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') userId: UserIdDto) {
    return this.usersService.deleteUser(userId)
  }
}
