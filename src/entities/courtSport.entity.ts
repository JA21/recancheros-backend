import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { EntitySport } from "./sport.entity";

@Entity('court_sport')
export class EntityCourtSport{
  @PrimaryGeneratedColumn('increment')
  id:number;
  
  @ManyToOne((type)=>EntitySport,sport=>sport.courtSport,{nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'})
  @JoinColumn({name:'fk_sport'})
  sport:EntitySport;

  @ManyToOne((type)=>EntityCourt,court=>court.court_sport,{nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'})
  @JoinColumn({name:'fk_court'})
  court:EntityCourt;

}