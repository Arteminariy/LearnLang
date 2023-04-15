import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageLessonsStepDto } from './dto/create-language-lessons-step.dto';
import { UpdateLanguageLessonsStepDto } from './dto/update-language-lessons-step.dto';
import { InjectModel } from '@nestjs/sequelize';
import { LanguageLessonSteps } from './entities/language-lessons-step.entity';

@Injectable()
export class LanguageLessonsStepsService {
	constructor(
		@InjectModel(LanguageLessonSteps)
		private languageLessonStepsRepository: typeof LanguageLessonSteps,
	) {}

	async create(createLanguageLessonsStepDto: CreateLanguageLessonsStepDto) {
		return 'This action adds a new languageLessonsStep';
	}

	async findAll() {
		return `This action returns all languageLessonsSteps`;
	}

	async findOne(id: number) {
		try {
			const languageLessonStep =
				await this.languageLessonStepsRepository.findOne({
					where: { id },
				});
			return languageLessonStep;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении шагов урока языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(
		id: number,
		updateLanguageLessonsStepDto: UpdateLanguageLessonsStepDto,
	) {
		return `This action updates a #${id} languageLessonsStep`;
	}

	async remove(id: number) {
		return `This action removes a #${id} languageLessonsStep`;
	}
}
