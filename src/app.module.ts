import { Module } from '@nestjs/common';
import { CardModule } from './card/Card.module';
import { DeskModule } from './desk/desk.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CardModule,
    DeskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
