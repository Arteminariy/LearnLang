import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Module } from './entities/module.entity';
import { Step } from 'src/steps/entities/step.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';

@Injectable()
export class ModulesService {
	constructor(@InjectModel(Module) private moduleRepository: typeof Module) {}
	async create(createModuleDto: CreateModuleDto) {
		try {
			const module = await this.moduleRepository.create(createModuleDto);
			if (!module) {
				throw new HttpException(
					`Не получилось создать новый модуль`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return module;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового модуля',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const modules = await this.moduleRepository.findAll({
				include: [
					{
						model: Lesson,
					},
				],
			});
			if (!modules) {
				throw new HttpException(
					`Не получилось получить модули`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return modules;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении модуля',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const module = await this.moduleRepository.findOne({
				where: { id },
				include: [
					{
						model: Lesson,
					},
				],
			});
			if (!module) {
				throw new HttpException(
					`Не получилось получить модуль`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return module;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении модуля',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateModuleDto: UpdateModuleDto) {
		try {
			const module = await this.moduleRepository.findByPk(id);
			if (!module) {
				throw new HttpException(
					`Модуль c id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await module.update(updateModuleDto);
			return module;
		} catch (error) {
			return new HttpException(
				'Ошибка при изменении модуля',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		try {
			const module = await this.moduleRepository.findByPk(id);
			if (!module) {
				throw new HttpException(
					`Модуль с id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await this.moduleRepository.destroy({
				where: { id },
			});
			return 'Модуль удалён успешно';
		} catch (error) {
			throw new HttpException(
				'Ошибка при удалении модуля',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}
}
