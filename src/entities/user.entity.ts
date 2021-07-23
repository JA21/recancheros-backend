import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { compareSync, hashSync } from "bcrypt";

import { EntityCenter } from "./center.entity";
import { EntityCourtUser } from "./courtUser.entity";
import { State } from "./enums/state.enums";
import { EntityHorary } from "./horary.entity";
import { EntityRol } from "./rol.entity";
import { EntityTypeDocument } from "./typeDocument.entity";
import { SALTS } from "src/modules/@common/constants";


@Entity('user')
@Index(['name_user'], { unique: true })
export class EntityUser {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column({
    nullable:false,
    type: 'int',
    name:'identification',
    unique:true
  })
  identification:number;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 180,
    name: 'nameUser',
    unique:true
  })
  name_user: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 180,
    name: 'lastname_user'
  })
  lastname_user: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 180,
    name: 'tel'
  })
  tel: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 180,
    name: 'mail',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 180,
    name: 'password'
  })
  password: string;

  @Column({
    nullable: false,
    type: 'enum',
    name: 'state',
    enum: State,
    default: State.Active
  })
  state: State;

  @ManyToOne((type) => EntityTypeDocument, (type_document) => type_document.user, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn({name:'fk_typeDocument'})
  typeDocument: EntityTypeDocument;


  @ManyToOne((type) => EntityRol, rol => rol.user, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn({name:'fk_rol'})
  rol: EntityRol;

  @OneToMany((type) => EntityHorary, horary => horary.user, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  horary: EntityHorary[];

  @OneToMany((type) => EntityCourtUser, court_user => court_user.user, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  courtUser: EntityCourtUser[];

  @OneToMany((type) => EntityCenter, center => center.user, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  center: EntityCenter[];


  @BeforeInsert()
  async hasPassword(): Promise<void> {
    this.password = await hashSync(this.password, SALTS.TEN);
  }

  public async ComparePassword(attemp: string): Promise<boolean> {
    return compareSync(attemp, this.password);
  }
}

//Crear función de insertar con js y llamarlo en el constructor