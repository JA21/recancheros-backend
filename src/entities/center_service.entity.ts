import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenter } from "./center.entity";
import { EntityService } from "./service.entity";

@Entity('center_service')
export class EntityCenterService{
  @PrimaryGeneratedColumn('uuid')
  id_centerservice:number;

  @ManyToOne((type)=>EntityCenter,center=>center.center_service,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  center:EntityCenter;

  @ManyToOne((type)=>EntityService,service=>service.center_service,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  service:EntityService;
}