import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor() {}

  @Get('me')
  dummy() {
    const user = {
      name: 'foo',
    };
    console.log('user', user);
  }
}
