import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityUser } from 'src/entities';
import { ResponseSucces,ResponseError } from 'src/modules/@common/types/response.type';
import { Repository } from 'typeorm';

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
      ],
    });
    if (res.length>0){
      return {
        succes:'ok',
        message:res
      }
    }else {
      return {
        error:'NO_RECORD',
        message:'N0 DATA'
      }
    }
    
  }
  public async createuser(){
    
  }
}
