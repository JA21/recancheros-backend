import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourtHorary } from "./courtHorary.entity";
import { EntityCourtSport } from "./courtSport.entity";
import { EntityCourtUser } from "./courtUser.entity";
import { EntityTypeCourt } from "./typeCourt.entity";


@Entity('court')
export class EntityCourt{
  @PrimaryGeneratedColumn('increment')
  id:number;

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
  courtUser:EntityCourtUser;

  
  @ManyToOne((type)=>EntityTypeCourt,type_court=>type_court.court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  @JoinColumn({name:'fk_type_Court'})
  typeCourt:EntityTypeCourt;

  
  @OneToMany((type)=>EntityCourtHorary,court_horary=>court_horary.court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  courtHorary:EntityCourtHorary;


}