import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Module } from './entities/module.entity';

@Injectable()
export class ModulesService {
	constructor(@InjectModel(Module) private moduleRepository: typeof Module) {}
	async create(createModuleDto: CreateModuleDto) {
		try {
			const language = await this.moduleRepository.create(
				createModuleDto,
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
		return `This action returns all modules`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} module`;
	}

	async update(id: number, updateModuleDto: UpdateModuleDto) {
		return `This action updates a #${id} module`;
	}

	async remove(id: number) {
		return `This action removes a #${id} module`;
	}
}
