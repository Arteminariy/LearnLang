import { Module } from '@nestjs/common';
import { LanguagesModule } from './languages/languages.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './languages/entities/language.entity';
import { LanguageModulesModule } from './language-modules/language-modules.module';
import { LanguageLessonsModule } from './language-lessons/language-lessons.module';
import { LanguageLessonsStepsModule } from './language-lessons-steps/language-lessons-steps.module';
import { LanguageModule } from './language-modules/entities/language-module.entity';
import { LanguageLesson } from './language-lessons/entities/language-lesson.entity';
import { LanguageLessonSteps } from './language-lessons-steps/entities/language-lessons-step.entity';
import { UserModule } from './user/user.module';

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
			models: [
				Language,
				LanguageModule,
				LanguageLesson,
				LanguageLessonSteps,
			],
			autoLoadModels: true,
			synchronize: true,
		}),
		LanguagesModule,
		LanguageModulesModule,
		LanguageLessonsModule,
		LanguageLessonsStepsModule,
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
