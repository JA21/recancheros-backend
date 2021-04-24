import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { EntityUser } from "./user.entity";

@Entity('court_user')
export class EntityCourtUser{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @ManyToOne((type)=>EntityUser,user=>user.courtUser,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  user:EntityUser;
  
  @ManyToOne((type)=>EntityCourt,court=>court.courtUser,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court:EntityCourt;

}