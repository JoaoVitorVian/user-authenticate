// src/microservice/microservice.module.ts
import { Module } from '@nestjs/common';
import { HttpModule, HttpModuleOptions } from '@nestjs/axios';
import { MicroserviceService } from './service/teste.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: (): HttpModuleOptions => ({
        timeout: 5000,
        maxRedirects: 5,
        baseURL: 'http://localhost:3000',
      }),
    }),
  ],
  providers: [MicroserviceService],
  exports: [MicroserviceService],
})
export class MicroserviceModule {}
