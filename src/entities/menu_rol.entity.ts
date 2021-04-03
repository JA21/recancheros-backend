import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityMenu } from "./menu.entity";
import { EntityRol } from "./rol.entity";


@Entity('menu_rol')
export class EntityMenuRol {
  @PrimaryGeneratedColumn('increment')
  id_menurol:number;

  @ManyToOne((type)=>EntityMenu,menu=>menu.menu_rol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  menu:EntityMenu;

  
  @ManyToOne((type)=>EntityRol,rol=>rol.menu_rol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  rol:EntityRol;


}