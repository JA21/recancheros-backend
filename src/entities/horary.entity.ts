import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourtHorary } from "./court_horary.entity";
import { EntityUser } from "./user.entity";


@Entity('horary')
export class EntityHorary{
  @PrimaryGeneratedColumn('increment')
  id_horary:number;

  @Column({name:'start_hour'
  ,type:'timestamp'})
  start_hour:Date;

  @Column({name:'end_hour',
  type:'timestamp'
  })
  end_hour:Date;

  @ManyToOne((type)=>EntityUser,user=>user.horary,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  user:EntityUser;

  
  @OneToMany((type)=>EntityCourtHorary,court_horary=>court_horary.horary,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court_horary:EntityCourtHorary;


}