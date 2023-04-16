import { Module } from '@nestjs/common';
import { LanguagesModule } from './languages/languages.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './languages/entities/language.entity';
import { UserModule } from './user/user.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';
import { StepsModule } from './steps/steps.module';
import { AuthModule } from './auth/auth.module';
import { Module as LModule } from './modules/entities/module.entity';
import { Lesson } from './lessons/entities/lesson.entity';
import { Step } from './steps/entities/step.entity';
import { ModuleTypesModule } from './module-types/module-types.module';
import { ModuleType } from './module-types/entities/module-type.entity';
import { RolesModule } from './roles/roles.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`,
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: String(process.env.POSTGRES_PASSWORD),
			database: process.env.POSTGRES_DB,
			models: [Language, LModule, Lesson, Step, ModuleType],
			autoLoadModels: true,
			synchronize: true,
		}),
		LanguagesModule,
		UserModule,
		ModulesModule,
		LessonsModule,
		StepsModule,
		AuthModule,
		ModuleTypesModule,
		RolesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
