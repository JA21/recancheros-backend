

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

  public async ValidUser(username:string, password:string): Promise<boolean>{
    const user:EntityUser = await this.userRepository.findOne({
      where: {userName:username},
    })

    return user && (await user.ComparePassword(password ));
  }
}