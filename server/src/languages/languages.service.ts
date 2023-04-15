import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './entities/language.entity';
import { Module } from 'src/modules/entities/module.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Step } from 'src/steps/entities/step.entity';

@Injectable()
export class LanguagesService {
	constructor(
		@InjectModel(Language) private languageRepository: typeof Language,
	) {}

	async create(createLanguageDto: CreateLanguageDto) {
		try {
			const language = await this.languageRepository.create(
				createLanguageDto,
			);
			if (!language) {
				throw new HttpException(
					`Не получилось создать новый язык`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return language;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const languages = await this.languageRepository.findAll({
				include: [
					{
						model: Module,
						include: [
							{
								model: Lesson,
								include: [{ model: Step }],
							},
						],
					},
				],
			});
			if (!languages) {
				throw new HttpException(
					`Не получилось получить языки`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return languages;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(
		id: number,
		modules: boolean,
		lessons: boolean,
		steps: boolean,
	) {
		try {
			let language;
			if (modules) {
				language = await this.languageRepository.findOne({
					where: { id },
					include: [
						{
							model: Module,
						},
					],
				});
				if (!language) {
					throw new HttpException(
						`Не получилось получить язык`,
						HttpStatus.INTERNAL_SERVER_ERROR,
					);
				}
			}
			if (lessons) {
				language = await this.languageRepository.findOne({
					where: { id },
					include: [
						{
							model: Module,
							include: [
								{
									model: Lesson,
								},
							],
						},
					],
				});
				if (!language) {
					throw new HttpException(
						`Не получилось получить язык`,
						HttpStatus.INTERNAL_SERVER_ERROR,
					);
				}
			}
			if (steps) {
				language = await this.languageRepository.findOne({
					where: { id },
					include: [
						{
							model: Module,
							include: [
								{
									model: Lesson,
									include: [{ model: Step }],
								},
							],
						},
					],
				});
				if (!language) {
					throw new HttpException(
						`Не получилось получить язык`,
						HttpStatus.INTERNAL_SERVER_ERROR,
					);
				}
			}
			return language;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateLanguageDto: UpdateLanguageDto) {
		try {
			const language = await this.languageRepository.findByPk(id);
			if (!language) {
				throw new HttpException(
					`Язык c id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await language.update(updateLanguageDto);
			return language;
		} catch (error) {
			return new HttpException(
				'Ошибка при изменении языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		try {
			// Проверяем, существует ли язык с таким id
			const language = await this.languageRepository.findByPk(id);
			if (!language) {
				// Если нет, выбрасываем исключение с кодом 404
				throw new HttpException(
					`Язык с id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			// Если да, удаляем его
			await this.languageRepository.destroy({
				where: { id },
			});
			// Возвращаем сообщение об успехе
			return 'Удалено успешно';
		} catch (error) {
			// Если произошла ошибка, выбрасываем исключение с кодом 500 и причиной
			throw new HttpException(
				'Ошибка при удалении языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}
}
