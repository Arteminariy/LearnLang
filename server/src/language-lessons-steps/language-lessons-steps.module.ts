import { Module } from '@nestjs/common';
import { LanguageLessonsStepsService } from './language-lessons-steps.service';
import { LanguageLessonsStepsController } from './language-lessons-steps.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageLessonSteps } from './entities/language-lessons-step.entity';
import { LanguageLesson } from 'src/language-lessons/entities/language-lesson.entity';

@Module({
	controllers: [LanguageLessonsStepsController],
	providers: [LanguageLessonsStepsService],
	imports: [
		SequelizeModule.forFeature([LanguageLessonSteps, LanguageLesson]),
	],
})
export class LanguageLessonsStepsModule {}
