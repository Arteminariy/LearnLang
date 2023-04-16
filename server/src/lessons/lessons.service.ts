import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lesson } from './entities/lesson.entity';
import { Step } from 'src/steps/entities/step.entity';

@Injectable()
export class LessonsService {
	constructor(@InjectModel(Lesson) private lessonRepository: typeof Lesson) {}
	async create(createLessonDto: CreateLessonDto) {
		try {
			const lesson = await this.lessonRepository.create(createLessonDto);
			if (!lesson) {
				throw new HttpException(
					`Не получилось создать новый урок`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return lesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового урока',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const lessons = await this.lessonRepository.findAll({
				include: [
					{
						model: Step,
					},
				],
			});
			if (!lessons) {
				throw new HttpException(
					`Не получилось получить уроки`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return lessons;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении уроков',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const lesson = await this.lessonRepository.findOne({
				where: { id },
				include: [
					{
						model: Step,
					},
				],
			});
			if (!lesson) {
				throw new HttpException(
					`Не получилось получить урок`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return lesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении урока',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateLessonDto: UpdateLessonDto) {
		try {
			const lesson = await this.lessonRepository.findByPk(id);
			if (!lesson) {
				throw new HttpException(
					`Урок c id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await lesson.update(updateLessonDto);
			return lesson;
		} catch (error) {
			return new HttpException(
				'Ошибка при изменении урока',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		try {
			const lesson = await this.lessonRepository.findByPk(id);
			if (!lesson) {
				throw new HttpException(
					`Урок с id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await this.lessonRepository.destroy({
				where: { id },
			});
			return 'Урок удалён успешно';
		} catch (error) {
			throw new HttpException(
				'Ошибка при удалении урока',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}
}
