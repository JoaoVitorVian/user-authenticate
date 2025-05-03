// src/microservice/microservice.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { LoginDto } from 'src/Controller/dto/login.dto';

@Injectable()
export class MicroserviceService {
  constructor(private readonly httpService: HttpService) {}

  async authenticate(credentials: LoginDto): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post('/auth/login', credentials),
    );
    return response.data;
  }

  async validateToken(token: string): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get('/auth/validate', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    );
    return response.data;
  }
}
