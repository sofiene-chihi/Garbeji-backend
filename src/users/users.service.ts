import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  async findAll(): Promise<User[]> {
    const allUsers = await User.find();
    return (allUsers); 
  }

  async getUser(credentials: LoginDto): Promise<User | undefined> {
    const user= await User.findOne({email: credentials.email});
    return user;
  }


  

  async createUser(data: RegisterDto): Promise<User>{
    const newUser:User = new User();
    newUser.firstName= data.firstName;
    newUser.lastName= data.lastName;
    newUser.email= data.email;
    newUser.password= data.password;
    await User.save(newUser);
    return newUser;
  }
}
