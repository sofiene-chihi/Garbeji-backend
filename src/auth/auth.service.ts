import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/dto/login-dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user: User = await this.usersService.getUser(loginDto);
    if (user){
        const { password, ...result } = user;
        return result;
    }
      return null;
  }

}
