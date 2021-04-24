import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCourt } from "./court.entity";

@Entity('type_court')
export class EntityTypeCourt{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({nullable:false,
  type:'varchar',
  name:'mame_court',
  length:180})
  nameCourt:string;

  @OneToMany((type)=>EntityCourt,court=>court.typeCourt,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court:EntityCourt[];
}