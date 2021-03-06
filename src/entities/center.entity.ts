import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenterPhone } from "./centerPhone.entity";
import { EntityCenterService } from "./centerService.entity";
import { EntityUser } from "./user.entity";


@Entity('center')
export class EntityCenter {
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({nullable:false,
  type:'varchar',
  name:'name_center',
  length:150,
  unique: true})
  name:string;

  @Column({nullable:false,
  type:'varchar',
  name:'address',
  length:150})
  address:string;
  
  @Column({nullable:false,
  type:'varchar',
  name:'email',
  length:150,
  unique:true,})
  email:string;
  
  @Column({nullable:false,
  type:'varchar',
  name:'phone',
  length:150})
  phone:string;
    
  @Column({nullable:false,
  type:'varchar',
  name:'rut',
  length:150,
  unique:true,})
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
 @JoinColumn({name:'fk_center'})
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