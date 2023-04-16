import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateModuleTypeDto } from './dto/create-module-type.dto';
import { UpdateModuleTypeDto } from './dto/update-module-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ModuleType } from './entities/module-type.entity';

@Injectable()
export class ModuleTypesService {
	constructor(
		@InjectModel(ModuleType)
		private moduleTypeRepository: typeof ModuleType,
	) {}
	async create(createModuleTypeDto: CreateModuleTypeDto) {
		try {
			const moduleType = await this.moduleTypeRepository.create(
				createModuleTypeDto,
			);
			if (!module) {
				throw new HttpException(
					`Не получилось создать новый тип модулей`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return moduleType;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового типа модулей',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const moduleTypes = await this.moduleTypeRepository.findAll();
			if (!moduleTypes) {
				throw new HttpException(
					`Не получилось получить типы модулей`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return moduleTypes;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении типы модулей',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const module = await this.moduleTypeRepository.findOne({
				where: { id },
			});
			if (!module) {
				throw new HttpException(
					`Не получилось получить тип модулей`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return module;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении типа модулей',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateModuleTypeDto: UpdateModuleTypeDto) {
		try {
			const moduleType = await this.moduleTypeRepository.findByPk(id);
			if (!moduleType) {
				throw new HttpException(
					`Тип модулей c id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await moduleType.update(updateModuleTypeDto);
			return moduleType;
		} catch (error) {
			return new HttpException(
				'Ошибка при изменении типа модулей',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		try {
			const moduleType = await this.moduleTypeRepository.findByPk(id);
			if (!moduleType) {
				throw new HttpException(
					`Модуль с id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await this.moduleTypeRepository.destroy({
				where: { id },
			});
			return 'Тип модулей удалён успешно';
		} catch (error) {
			throw new HttpException(
				'Ошибка при удалении типа модулей',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}
}
