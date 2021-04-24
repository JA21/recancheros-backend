import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenterService } from "./centerService.entity";

@Entity('service')
export class EntityService{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({nullable:false,
    type:'varchar',
    name:'name_service',
    length:255})
  name:string;

  @Column({nullable:false,
  type:'varchar',
  name:'price_service',
  length:255})
  price:string;

  @OneToMany((type)=>EntityCenterService,center_service=>center_service,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  centerService:EntityCenterService;
}