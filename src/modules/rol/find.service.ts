import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRol } from 'src/entities';
import { Rol } from 'src/entities/enums';
import { getConnection, Repository } from 'typeorm';
import {CreateRolDto} from './dto/createRol.dto';
@Injectable()
export class FindService {

constructor(
  @InjectRepository(EntityRol)
    private readonly rolRepository: Repository<EntityRol>,
){}

  async createRol(createRolDto:CreateRolDto) {
    const res = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(EntityRol)
    .values([{
      rol: Rol.Admind,
      description:createRolDto.description
    }])
    .execute();
    return res;
  }
}
