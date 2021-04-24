import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityMenu } from "./menu.entity";
import { EntityRol } from "./rol.entity";


@Entity('menu_rol')
export class EntityMenuRol {
  @PrimaryGeneratedColumn('increment')
  id:number;

  @ManyToOne((type)=>EntityMenu,menu=>menu.menuRol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  menu:EntityMenu;

  
  @ManyToOne((type)=>EntityRol,rol=>rol.menuRol,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  @JoinColumn({name:'fk_rol'})
  rol:EntityRol;


}