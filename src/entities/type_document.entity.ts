import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TypeDocument } from "./enums/typeDocument.enums";
import { EntityUser } from "./user.entity";


@Entity('type_document')
export class EntityTypeDocument {
  @PrimaryGeneratedColumn('increment')
  id_document:number;

  @Column({nullable:false,
  type:'enum',
  name:'document',
  enum:TypeDocument})
  type:TypeDocument;

  @Column({
    type:'varchar',
    length:255,
    name:'description'
  })
  description:string;

  @OneToMany((type)=>EntityUser,user=>user.type_document,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  user:EntityUser;
}