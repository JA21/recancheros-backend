import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./enums/rol.enums";
import { EntityMenuRol } from "./menuRol.entity";
import { EntityUser } from "./user.entity";


@Entity({name:'rol'})
export class EntityRol{
  @PrimaryGeneratedColumn('increment')
  id:number;
  
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
  menuRol:EntityMenuRol[];
  
  @OneToMany((type)=>EntityUser,user=>user.rol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  } )
  user:EntityUser[];

}