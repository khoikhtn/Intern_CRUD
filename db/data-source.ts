import { Task } from "src/task/task.entity";
import { User } from "src/user/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: 'mariadb',
  host: 'localhost',
  username: 'khoi',
  password: '1',
  port: 3307,
  database: 'cms',
  entities: [User, Task],
  migrations: ['dist/db/migration/*.js'],
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource