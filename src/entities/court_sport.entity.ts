import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";
import { EntitySport } from "./sport.entity";

@Entity('court_sport')
export class EntityCourtSport{
  @PrimaryGeneratedColumn('increment')
  id_courtsport:number;
  
  @ManyToOne((type)=>EntitySport,sport=>sport.court_sport,{nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'})
  sport:EntitySport;

  @ManyToOne((type)=>EntityCourt,court=>court.court_sport,{nullable:false,
  onDelete:'RESTRICT',
  onUpdate:'RESTRICT'})
  court:EntityCourt;

}