import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourtHorary } from "./court_horary.entity";
import { EntityCourtSport } from "./court_sport.entity";
import { EntityCourtUser } from "./court_user.entity";
import { EntityTypeCourt } from "./type_court.entity";


@Entity('court')
export class EntityCourt{
  @PrimaryGeneratedColumn('uuid')
  id_field:number;

  @Column({nullable:false,
  type:'varchar',
  name:'name_field',
  length:150})
  name:string;

  @Column({nullable:false,
  type:'varchar',
  name:'number_field',
  length:150})
  number:string;

  @OneToMany((type)=>EntityCourtSport,court_sport=>court_sport.court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court_sport:EntityCourtSport;

  @OneToMany((type)=>EntityCourtUser,court_user=>court_user.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court_user:EntityCourtUser;

  
  @ManyToOne((type)=>EntityTypeCourt,type_court=>type_court.court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  type_court:EntityTypeCourt;

  
  @OneToMany((type)=>EntityCourtHorary,court_horary=>court_horary.court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court_horary:EntityCourtHorary;


}