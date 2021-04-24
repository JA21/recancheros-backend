import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourtHorary } from "./courtHorary.entity";
import { EntityUser } from "./user.entity";


@Entity('horary')
export class EntityHorary{
  @PrimaryGeneratedColumn('increment')
  id:number;

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
  @JoinColumn({name:'fk_horary'})
  user:EntityUser;

  
  @OneToMany((type)=>EntityCourtHorary,court_horary=>court_horary.horary,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  courtHorary:EntityCourtHorary;


}