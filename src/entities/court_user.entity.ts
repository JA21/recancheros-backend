import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { EntityUser } from "./user.entity";

@Entity('court_user')
export class EntityCourtUser{
  @PrimaryGeneratedColumn('increment')
  id_courtuser:number;

  @ManyToOne((type)=>EntityUser,user=>user.court_user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  user:EntityUser;
  
  @ManyToOne((type)=>EntityCourt,court=>court.court_user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court:EntityCourt;

}