import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EnvConfig } from './config/env.config.js';


@Module({
	imports: [
		ConfigModule.forRoot({
			load: [EnvConfig]
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (typeConfig: ConfigService) => ({
				...typeConfig.getOrThrow('database')
			})
		})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
