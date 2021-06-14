import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Location } from './location.entity';
import { Service } from '../services/service.entity'
import { History } from './history.entity';

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

  @ManyToOne(type => Location, {
    cascade:true 
  })
  @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
  location: Location;

  @OneToMany(type => Service, service => service.user)
  services: Service[];

  @OneToOne(()=> History, {
    cascade:true
  })
  @JoinColumn()
  history: History;

}