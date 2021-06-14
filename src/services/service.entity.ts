import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    state: string;
  
    @Column()
    delegation: string;
  
    @Column()
    width: number;
  
    @Column()
    height: number;
  
    @ManyToOne(type => User)
    @JoinColumn()
    user:User;
  }