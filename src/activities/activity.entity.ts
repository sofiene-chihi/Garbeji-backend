import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { History } from "../users/history.entity";
import { Notification } from "../notifications/notification.entity";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({type: "date"})
    time;

    @Column()
    location: string;

    @Column()
    status: string;

    @Column()
    client: string;

    @Column()
    provider: string;

      
    @ManyToOne(type => History)
    @JoinColumn()
    history: History; 

    @OneToMany(type => Notification, notification => notification.activity)
    activities: Activity[];
  
  }