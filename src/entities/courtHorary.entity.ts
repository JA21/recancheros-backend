import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { State } from "./enums";
import { EntityHorary } from "./horary.entity";

@Entity('court_horary')
export class EntityCourtHorary{
  
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({nullable:false,
  type:'int',
  name:'price'})
  price:number;

  @Column({type:'enum',
  enum:State,
  name:'state',
  default:State.Active})
  state:State;

  @ManyToOne((type)=>EntityCourt,court=>court.courtHorary,{
  nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'  
  })
  @JoinColumn({name:'fk_court'})
  court:EntityCourt;

  @ManyToOne((type)=>EntityHorary,horary=>horary.courtHorary,{
  nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'  
  })
  @JoinColumn({name:'fk_horary'})
  horary:EntityHorary;
}