import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./enums/rol.enums";
import { EntityMenuRol } from "./menu_rol.entity";
import { EntityUser } from "./user.entity";


@Entity('rol')
export class EntityRol{
  @PrimaryGeneratedColumn('uuid')
  id_rol:number;
  
  @Column({nullable:false,
    type:'enum',
    name:'rol',
    enum:Rol
  })
  rol:Rol;

  @Column({type:'varchar',
  name:'description',
  length:255})
  description:string;

  @OneToMany((type)=>EntityMenuRol,menu_rol=>menu_rol.rol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  } )
  menu_rol:EntityMenuRol;
  
  @OneToMany((type)=>EntityUser,user=>user.rol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  } )
  user:EntityUser;

}