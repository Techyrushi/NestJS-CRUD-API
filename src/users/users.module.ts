import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../typeorm/entities/Post';
import { Profile } from '../typeorm/entities/Profile';
import { User } from '../typeorm/entities/User';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { Order } from 'src/typeorm/entities/Order';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post, Order])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
