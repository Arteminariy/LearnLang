import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageModuleDto } from './dto/create-language-module.dto';
import { UpdateLanguageModuleDto } from './dto/update-language-module.dto';
import { LanguageModule } from './entities/language-module.entity';
import { InjectModel } from '@nestjs/sequelize';
import { LanguageLessonSteps } from 'src/language-lessons-steps/entities/language-lessons-step.entity';
import { LanguageLesson } from 'src/language-lessons/entities/language-lesson.entity';

@Injectable()
export class LanguageModulesService {
	constructor(
		@InjectModel(LanguageModule)
		private languageModuleRepository: typeof LanguageModule,
	) {}

	async create(createLanguageModuleDto: CreateLanguageModuleDto) {
		try {
			const languageModule = await this.languageModuleRepository.create(
				createLanguageModuleDto,
			);
			if (!languageModule) {
				throw new HttpException(
					`Не получилось создать новый модуль языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return languageModule;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового модуля языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const languageModules = await this.languageModuleRepository.findAll(
				{
					include: [
						{
							model: LanguageLesson,
							include: [
								{
									model: LanguageLessonSteps,
								},
							],
						},
					],
				},
			);
			if (!languageModules) {
				throw new HttpException(
					`Не получилось получить модули языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return languageModules;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении модулей языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const languageModule = await this.languageModuleRepository.findOne({
				where: { id },
				include: [
					{
						model: LanguageLesson,
						include: [
							{
								model: LanguageLessonSteps,
							},
						],
					},
				],
			});
			if (!languageModule) {
				throw new HttpException(
					`Не получилось получить модуль языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return languageModule;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении модуля языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateLanguageModuleDto: UpdateLanguageModuleDto) {
		return `This action updates a #${id} languageModule`;
	}

	async remove(id: number) {
		return `This action removes a #${id} languageModule`;
	}
}
