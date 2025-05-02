import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './Service/auth.service';
import { JwtStrategy } from './Core/auth/jwt.strategy';
import { UsersModule } from './user.module';
import { AuthController } from './Controller/auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController], //TODO: colocar o controller de auth
})
export class AuthModule {}
