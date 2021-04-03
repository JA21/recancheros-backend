import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenterPhone } from "./center_phone.entity";
import { EntityCenterService } from "./center_service.entity";
import { EntityUser } from "./user.entity";


@Entity('center')
export class EntityCenter {
  @PrimaryGeneratedColumn('increment')
  id_center:number;

  @Column({nullable:false,
  type:'varchar',
  name:'name_center',
  length:150})
  name:string;

  @Column({nullable:false,
  type:'varchar',
  name:'address',
  length:150})
  address:string;
  
  @Column({nullable:false,
  type:'varchar',
  name:'email',
  length:150})
  email:string;
  
  @Column({nullable:false,
  type:'varchar',
  name:'phone',
  length:150})
  phone:string;
    
  @Column({nullable:false,
  type:'varchar',
  name:'rut',
  length:150})
  rut:string;

  @Column({nullable:false,
  type:'varchar',
  name:'description',
  length:150})
  description:string;

 @ManyToOne((type)=>EntityUser,user=>user.center,{
   nullable:false,
   onDelete:'RESTRICT',
   onUpdate:'RESTRICT'
 })
  user:EntityUser;    

 @OneToMany((type)=>EntityCenterPhone,center_phone=>center_phone.center,{
   nullable:false,
   onDelete:'RESTRICT',
   onUpdate:'RESTRICT'
 })
  center_phone:EntityCenterPhone;    
  
 @OneToMany((type)=>EntityCenterService,center_service=>center_service.center,{
   nullable:false,
   onDelete:'RESTRICT',
   onUpdate:'RESTRICT'
 })
  center_service:EntityCenterService;    

}