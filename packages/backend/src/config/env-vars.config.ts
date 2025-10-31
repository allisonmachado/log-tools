import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

export default function envVarsConfig() {
  return ConfigModule.forRoot({
    validationSchema: Joi.object({
      NODE_ENV: Joi.string().required(),
    }),
  });
}
