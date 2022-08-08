import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';



export const databaseProvide=TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'trimai',
    database: 'nestjs',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
})