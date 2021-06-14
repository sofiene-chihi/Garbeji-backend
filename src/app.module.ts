import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'
import { Location } from './users/location.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/service.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'garbeji_db',
      entities: [User, Location,Service],
      synchronize: true,
  }), UsersModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
