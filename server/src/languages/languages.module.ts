import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './entities/language.entity';
import { LanguageModule } from 'src/modules/entities/module.entity';

@Module({
	controllers: [LanguagesController],
	providers: [LanguagesService],
	imports: [SequelizeModule.forFeature([Language, LanguageModule])],
})
export class LanguagesModule {}
