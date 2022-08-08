import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequest } from './dto/login-request.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  constructor(private jwtService: JwtService){}
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async login(logreq: LoginRequest): Promise<User | undefined> {
    const checkuser= this.users.find(user => user.username === logreq.username );
    console.log(checkuser)
    if(checkuser && checkuser.password===logreq.password)
            return {
                
                username:checkuser.username,
                token:this.jwtService.sign({userId:checkuser.userId,username:checkuser.username})
            }
    return {
        message:"404"
    }
  }

  getAll(){

    return this.users
  }

}