import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LoginRequest } from './dto/login-request.dto';
import { UsersService } from './users.service';


@ApiTags("/users")
@ApiBearerAuth()
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

  @Post('auth/login')
  async login( @Body() loginReq:LoginRequest) {

    return await this.usersService.login(loginReq)
  } 
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAllUser() {

        return this.usersService.getAll()
    
  } 
}