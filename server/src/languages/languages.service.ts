import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './entities/language.entity';
import { LanguageModule } from 'src/language-modules/entities/language-module.entity';

@Injectable()
export class LanguagesService {
	constructor(
		@InjectModel(Language) private languageRepository: typeof Language,
		@InjectModel(LanguageModule)
		private languageModuleRepository: typeof LanguageModule,
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
			// Получаем все языки из репозитория
			const languages = await this.languageRepository.findAll();
			// Возвращаем их
			return languages;
		} catch (error) {
			// Если произошла ошибка, выбрасываем исключение с кодом 500 и причиной
			throw new HttpException(
				'Ошибка при получении языков',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const language = await this.languageRepository.findOne({
				where: { id },
			});
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

	async addModule(languageId: number, moduleId: number) {
		try {
			const language = await this.languageRepository.findByPk(languageId);
			if (!language) {
				throw new HttpException(
					'Нет языка с таким id',
					HttpStatus.BAD_REQUEST,
				);
			}
			const module = await this.languageModuleRepository.findByPk(
				moduleId,
			);
			if (!module) {
				throw new HttpException(
					'Нет языкового модуля с таким id',
					HttpStatus.BAD_REQUEST,
				);
			}
			await module.$add('languageId', language.id)
			await language.$add('modules', module);
			return language;
		} catch (error) {
			return new HttpException(
				'Ошибка при добавлении языкового модуля в язык',
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
