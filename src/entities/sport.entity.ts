import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourtSport } from "./courtSport.entity";
import { State } from "./enums";


@Entity('sport')
export class EntitySport{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({nullable:false,
  name:'name_sport',
  type:'varchar',
  length:255})
  name:string;

  @Column({type:'enum'
    ,enum: State,
    name:'state',
    default:State.Active})
  state:State;

  @OneToMany((type)=>EntityCourtSport,court_sport=>court_sport.sport,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  courtSport:EntityCourtSport;
}