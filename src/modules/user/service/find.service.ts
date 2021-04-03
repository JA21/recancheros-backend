import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { connect } from 'node:http2';
import { EntityRol, EntityUser } from 'src/entities';
import { ResponseSucces, ResponseError } from 'src/modules/@common/types/response.type';
import { Connection, createQueryBuilder, getConnection, getManager, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';

@Injectable()
export class FindService {

  constructor(
    @InjectRepository(EntityUser)
    private readonly userRepository: Repository<EntityUser>
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
        name_user: "palito"
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

  public async finUser(dtoCreateUser: CreateUserDto) {
    return await this.userRepository.find();
  }
  public async createuser(createUserDto: CreateUserDto) {
    const res = this.userRepository.create({
      name_user: createUserDto.name_user,
      lastname_user: createUserDto.lastname_user,
      tel: createUserDto.tel,
      email: createUserDto.email,
      password: createUserDto.password,
      // rol:createUserDto.rol,
      // type_document:createUserDto.type_document

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
  public async UserInnerTypeDocumentRol(){
    const res = await getManager()
    .createQueryBuilder(EntityUser,"user")
    .addSelect('user.rol','rol')
    .innerJoin(EntityRol,'rol','user.rol=rol.user')
    .getRawMany();
    return res;
  }

  public async userInneJoinLeft(){
    const res = await connection
    .getRepository(EntityUser)
     createQueryBuilder(EntityUser,"user")
    .leftJoinAndSelect("user.rol","rol")
    // .orderBy("user.id_user")
    .getRawOne();
    
    
    return res;
  }
}
