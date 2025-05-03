import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'default_secret_key',
    });
  }

  async validate(payload: { sub: string; email: string }) {
    await Promise.resolve();
    console.log('Payload JWT:', payload);
    return { userId: payload.sub, email: payload.email };
  }
}
