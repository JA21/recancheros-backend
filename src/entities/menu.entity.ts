import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./enums";
import {EntityMenuRol} from './menuRol.entity';


@Entity('menu')
export class EntityMenu {

  @PrimaryGeneratedColumn('increment')
  id: number;

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
   menuRol:EntityMenuRol[];
}