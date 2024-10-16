import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { Task } from "./task/task.entity";
import { UserModule } from "./user/user.module";
import { TaskModule } from "./task/task.module";
import { dataSourceOptions } from "db/data-source";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    TaskModule,
    AuthModule,
  ],
})

export class AppModule {}