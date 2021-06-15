import { Controller, Get, Param, Request, Post, Body, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import {LoginDto} from './dto/login-dto'
import { RegisterDto } from './dto/register-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
        ){}

    @Get('all')
    allUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post('login')
    getUser(@Body() credentials: LoginDto): Promise< User > {
        return this.usersService.getUser(credentials);
    }

    @Post('register')
    createUser(@Body() data: RegisterDto): Promise<User> {
        return this.usersService.createUser(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(){
        return "here is your profile"
    }
    
}

