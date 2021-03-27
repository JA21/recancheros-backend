import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityCenter } from "./center.entity";
import { EntityCourtUser } from "./court_user.entity";
import { Rol } from "./enums/rol.enums";
import { State } from "./enums/state.enums";
import { EntityHorary } from "./horary.entity";
import { EntityRol } from "./rol.entity";
import { EntityTypeDocument } from "./type_document.entity";


@Entity('user')
@Index(['name_user'])
export class EntityUser{
  @PrimaryGeneratedColumn('uuid')
  id_user:number;

  @Column({nullable:false,
  type:'varchar',
  length:45,
  name:'nameUser'
  })
  name_user:string;

  @Column({nullable:false,
    type:'varchar',
    length:45,
    name:'lastname_user'
   })
  lastname_user:string;

  @Column({nullable:false,
    type:'varchar',
    length:45,
    name:'tel'
  })
  tel:string;

  @Column({nullable:false,
    type:'varchar',
    length:45,
    name:'mail'
  })
  email:string;

  @Column({nullable:false,
    type:'varchar',
    length:45,
    name:'password'
  })
  password:string;

  @Column({nullable:false,
  type:'enum',
  name:'state',
  enum:State,
  default:State.Active
  })
  state:State;

  @ManyToOne((type)=>EntityTypeDocument,type_document=>type_document.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  type_document:EntityTypeDocument;
  

  @ManyToOne((type)=>EntityRol,rol=>rol.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  rol:EntityRol;
  
  @OneToMany((type)=>EntityHorary,horary=>horary.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  horary:EntityHorary;

  @OneToMany((type)=>EntityCourtUser,court_user=>court_user.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  court_user:EntityCourtUser;

  @OneToMany((type)=>EntityCenter,center=>center.user,{
    nullable:false,
    onDelete:'RESTRICT',
    onUpdate:'RESTRICT'
  })
  center:EntityCenter;

}