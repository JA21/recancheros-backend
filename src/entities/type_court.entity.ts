import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";

@Entity('type_court')
export class EntityTypeCourt{
  @PrimaryGeneratedColumn('increment')
  id_typecourt:number;

  @Column({nullable:false,
  type:'varchar',
  name:'mame_court',
  length:180})
  name:string;

  @OneToMany((type)=>EntityCourt,court=>court.type_court,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court:EntityCourt;
}