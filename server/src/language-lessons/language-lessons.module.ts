import { Module } from '@nestjs/common';
import { LanguageLessonsService } from './language-lessons.service';
import { LanguageLessonsController } from './language-lessons.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageLesson } from './entities/language-lesson.entity';
import { LanguageLessonSteps } from 'src/language-lessons-steps/entities/language-lessons-step.entity';
import { LanguageModule } from 'src/language-modules/entities/language-module.entity';

@Module({
	controllers: [LanguageLessonsController],
	providers: [LanguageLessonsService],
	imports: [
		SequelizeModule.forFeature([
			LanguageLesson,
			LanguageLessonSteps,
			LanguageModule,
		]),
	],
})
export class LanguageLessonsModule {}
