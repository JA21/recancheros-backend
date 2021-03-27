import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([], 'user')

  ],
  providers: [
  ],
  exports: [
    
  ]
})
export class CommonModule { }