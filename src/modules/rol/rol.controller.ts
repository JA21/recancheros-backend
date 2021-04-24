import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRolDto } from './dto/createRol.dto';
import { FindService } from './find.service';

@Controller('rol')
export class RolController {
  constructor(private readonly findService: FindService) { }

  @Post('/createRol')
  async CreateRol(@Body() createRolDto: CreateRolDto) {
    const res = await this.findService.createRol(createRolDto);
    return res;
  }
}

