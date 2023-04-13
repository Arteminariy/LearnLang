import { Module } from '@nestjs/common';
import { LanguageModulesService } from './language-modules.service';
import { LanguageModulesController } from './language-modules.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageModule } from './entities/language-module.entity';
import { LanguageLesson } from 'src/language-lessons/entities/language-lesson.entity';
import { Language } from 'src/languages/entities/language.entity';

@Module({
	controllers: [LanguageModulesController],
	providers: [LanguageModulesService],
	imports: [
		SequelizeModule.forFeature([LanguageModule, LanguageLesson, Language]),
	],
})
export class LanguageModulesModule {}
