import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { databaseProvide } from './database.provider';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule,databaseProvide,PassportModule],
})
export class AppModule {}
