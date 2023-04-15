import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageLessonDto } from './dto/create-language-lesson.dto';
import { UpdateLanguageLessonDto } from './dto/update-language-lesson.dto';
import { LanguageLesson } from './entities/language-lesson.entity';
import { InjectModel } from '@nestjs/sequelize';
import { LanguageLessonSteps } from 'src/language-lessons-steps/entities/language-lessons-step.entity';

@Injectable()
export class LanguageLessonsService {
	constructor(
		@InjectModel(LanguageLesson)
		private languageLessonRepository: typeof LanguageLesson,
	) {}

	async create(createLanguageLessonDto: CreateLanguageLessonDto) {
		try {
			const languageLesson = await this.languageLessonRepository.create(
				createLanguageLessonDto,
			);
			if (!languageLesson) {
				throw new HttpException(
					`Не получилось создать новый урок языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return languageLesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового урока языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		return `This action returns all languageLessons`;
	}

	async findOne(id: number) {
		try {
			const languageLesson = await this.languageLessonRepository.findOne({
				where: { id },
				include: [
					{
						model: LanguageLessonSteps,
					},
				],
			});
			return languageLesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении урока языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateLanguageLessonDto: UpdateLanguageLessonDto) {
		try {
			const languageLesson = await this.languageLessonRepository.findByPk(
				id,
			);
			if (!languageLesson) {
				throw new HttpException(
					`Не получилось найти урок языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}

			const updatedLanguageLesson = await languageLesson.update(
				updateLanguageLessonDto,
			);

			if (!updatedLanguageLesson) {
				throw new HttpException(
					`Не получилось обновить урок языка`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}

			return updatedLanguageLesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании обновлении урока языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async remove(id: number) {
		return `This action removes a #${id} languageLesson`;
	}
}
