import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenter } from "./center.entity";

@Entity('center_phone')
export class EntityCenterPhone{
  @PrimaryGeneratedColumn('uuid')
  id_centerphone;

  @Column({nullable:false,
  type:'varchar',
  name:'number_centerphone',
  length:100})
  number:number;

  @ManyToOne((type)=>EntityCenter,center=>center.center_phone,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  center:EntityCenter;
}