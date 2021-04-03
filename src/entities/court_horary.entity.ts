import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { State } from "./enums";
import { EntityHorary } from "./horary.entity";

@Entity('court_horary')
export class EntityCourtHorary{
  
  @PrimaryGeneratedColumn('increment')
  id_courthorary:number;

  @Column({nullable:false,
  type:'int',
  name:'price'})
  price:number;

  @Column({type:'enum',
  enum:State,
  name:'state',
  default:State.Active})
  state:State;

  @ManyToOne((type)=>EntityCourt,court=>court.court_horary,{
  nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'  
  })
  court:EntityCourt;

  @ManyToOne((type)=>EntityHorary,horary=>horary.court_horary,{
  nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'  
  })
  horary:EntityHorary;
}