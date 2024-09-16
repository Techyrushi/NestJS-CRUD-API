/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  p_name: string;

  @Column()
  p_description: string;

  @Column()
  p_amount: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
