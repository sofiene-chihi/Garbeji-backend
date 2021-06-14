import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Location } from './location.entity';
import { Service } from '../services/service.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(type => Location)
  @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
  location: Location;

  @OneToMany(type => Service, service => service.user)
  services: Service[];
}