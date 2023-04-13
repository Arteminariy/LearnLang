import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageModuleDto } from './dto/create-language-module.dto';
import { UpdateLanguageModuleDto } from './dto/update-language-module.dto';
import { LanguageModule } from './entities/language-module.entity';
import { InjectModel } from '@nestjs/sequelize';

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
				'Ошибка при создании нового языка',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		return `This action returns all languageModules`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} languageModule`;
	}

	async update(id: number, updateLanguageModuleDto: UpdateLanguageModuleDto) {
		return `This action updates a #${id} languageModule`;
	}

	async remove(id: number) {
		return `This action removes a #${id} languageModule`;
	}
}
