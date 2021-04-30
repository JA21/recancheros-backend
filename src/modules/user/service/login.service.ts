import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityUser } from "src/entities";
import { Repository } from "typeorm";




@Injectable()
export class ValidateService{
  constructor(
    @InjectRepository(EntityUser)
    private readonly userRepository: Repository<EntityUser>
  ){}

}