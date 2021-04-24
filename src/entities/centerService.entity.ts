import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenter } from "./center.entity";
import { EntityService } from "./service.entity";

@Entity('center_service')
export class EntityCenterService{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @ManyToOne((type)=>EntityCenter,center=>center.center_service,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  @JoinColumn({name:'fk_center'})
  center:EntityCenter;

  @ManyToOne((type)=>EntityService,service=>service.centerService,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  @JoinColumn({name:'fk_service'})
  service:EntityService;
}