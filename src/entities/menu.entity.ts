import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./enums";
import {EntityMenuRol} from './menu_rol.entity';


@Entity('menu')
export class EntityMenu {

  @PrimaryGeneratedColumn('uuid')
  id_menu: number;

  @Column({
    nullable: false,
    type: 'varchar',
    name: 'name',
    length: 90
  })
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    name: 'father',
    length: 255
  })
  faher: string;

  @Column({
    nullable: false,
    type: 'enum',
    name: 'state',
    enum: State,
    default: State.Active
  })
  state: State;

  @OneToMany((type) => EntityMenuRol, menu_rol => menu_rol.menu, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
   menu_rol:EntityMenuRol[];
}