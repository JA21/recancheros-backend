import { CreateUserDto } from '../dto/createUser.dto';
import { EntityRol, EntityTypeDocument, EntityUser } from 'src/entities';
import { Rol, TypeDocument, State } from 'src/entities/enums'

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseSucces, ResponseError } from 'src/modules/@common/types/response.type';
import { Connection, createQueryBuilder, getConnection, getManager, getRepository, Not, Repository } from 'typeorm';

@Injectable()
export class FindService {

  constructor(
    @InjectRepository(EntityUser)
    private readonly userRepository: Repository<EntityUser>,
    @InjectRepository(EntityRol)
    private readonly rolRepository: Repository<EntityRol>,
    @InjectRepository(EntityTypeDocument)
    private readonly typeDocumentRepository: Repository<EntityTypeDocument>
  ) { }




  public async findAll(): Promise<ResponseSucces | ResponseError> {
    const res = await this.userRepository.find({
      select: [
        'name_user',
        'lastname_user',
        'tel',
        'email',
        'password',
        'state',
      ], where: [{
        name_user: "jaao"
      }]
    });
    if (res.length > 0) {
      return {
        succes: 'ok',
        message: res
      }
    } else {
      return {
        error: 'NO_RECORD',
        message: 'N0 DATA'
      }
    }

  }


  public async createUserTransaction(createUserDto: CreateUserDto) {
    const res = await getManager().transaction(async (entityManager) => {

      const user = this.userRepository.create({
        name_user: createUserDto.name_user,
        lastname_user: createUserDto.lastname_user,
        tel: createUserDto.tel,
        email: createUserDto.email,
        password: createUserDto.password,
        state: State.Active,
        rol: { id: createUserDto.rol_id },
        typeDocument: { id: createUserDto.type_document_id }
      }); 

      console.log("============");
      console.log(user);
      console.log("============")
      await entityManager.save(user); 
    });
    return res;
  }



  public async oneUser(id: number) {
    const users = await getManager()
      .createQueryBuilder(EntityUser, "user")
      .where("user.id_user= :id", { id_user: id })
      .getOne;
    return users;
  }
  public async documentType() {
    const users = await this.typeDocumentRepository.find();

    return users;
  }

  public async createUser(createUserDto: CreateUserDto) {
    const users = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(EntityUser)
      .values([
        {
          name_user: createUserDto.name_user,
          lastname_user: createUserDto.lastname_user,
          tel: createUserDto.tel,
          email: createUserDto.email,
          password: createUserDto.password,
          // state: createUserDto.state,

        }
      ])
      .execute();
    return users;
  }

  public async oneUserName(name_user: string) {
    const users = await getManager()
      .createQueryBuilder()
      .select("user")
      .from(EntityUser, "user")
      .where("user.name_user= :name_user", { name_user: name_user });
    return users;
  }

  public async oneUserNameId(name_user: string, id: number) {
    const users = await getRepository(EntityUser)
      .createQueryBuilder("user")
      .where("user.name_user= :name_user OR user.id_user= :id", { name_user: name_user, id_user: id })
      .getOneOrFail();
    return users;
  }

  public async typeDocumentUser(): Promise<ResponseSucces | ResponseError> {
    const res = await this.userRepository.find({
      join: {
        alias: "user",
        leftJoinAndSelect: {
          type_document: "user.type_document",
          rol: "user.rol"
        }
      }, where: [{
        id_user: 1
      }]
    });
    if (res.length > 0) {
      return {
        succes: 'ok',
        message: res
      }
    } else {
      return {
        error: 'NO_RECORD',
        message: 'N0 DATA'
      }
    }
  }
  public async UserInnerTypeDocumentRol() {
    const res = await getManager()
      .createQueryBuilder(EntityUser, "user")
      .addSelect('user.rol', 'rol')
      .innerJoin(EntityRol, 'rol', 'user.rol=rol.user')
      .getRawMany();
    return res;
  }

  public async userInneJoinLeft() {
    const res = await
      createQueryBuilder(EntityUser, "user")
        .leftJoinAndSelect("user.rol", "rol")
        // .orderBy("user.id_user")
        .getRawOne();


    return res;
  }

  public async rolinnerJoin() {
    console.log("entro");
    const res = await this.rolRepository.find({
      relations: ['user']
    })
    return {
      succes: 'ok',
      message: res
    }
  }
  public async AllRelationsUserOneToMany() {
    const res = await this.userRepository.find({
      join: {
        alias: "user",
        leftJoinAndSelect: {
          horary: "user.horary",
          center: "user.center"
        }
      }, where: [{ name_user: "jaao", lastname_user: "andres" }],
      order: {
        id: "DESC"
      },
      take: 4
    });
    if (res.length > 0) {
      return {
        succes: 'ok',
        message: res
      }
    } else {
      return {
        error: 'NO_RECORD',
        message: 'N0 DATA'
      }
    }
  }

  public async userFindOne() {
    const res = await this.userRepository.findOne(1, {
      lock: { mode: "optimistic", version: 1 }
    })
    return res;
  }

  public async userDiferentName() {
    const res = await this.userRepository.find({
      name_user: Not("jaao")
    });
    if (res.length > 0) {
      return {
        succes: 'ok',
        message: res
      }
    } else {
      return {
        error: 'NO_RECORD',
        message: 'NO DATA'
      }
    }
  }
}
