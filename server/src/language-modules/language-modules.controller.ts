import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { LanguageModulesService } from './language-modules.service';
import { CreateLanguageModuleDto } from './dto/create-language-module.dto';
import { UpdateLanguageModuleDto } from './dto/update-language-module.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LanguageModule } from './entities/language-module.entity';

@ApiTags('Языковой модуль')
@Controller('language-modules')
export class LanguageModulesController {
	constructor(
		private readonly languageModulesService: LanguageModulesService,
	) {}

	@ApiOperation({ summary: 'Создать новый модуль языка' })
	@ApiResponse({
		status: 201,
		description: 'Модуль языка успешно создан',
		type: LanguageModule,
	})
	@ApiBody({ type: CreateLanguageModuleDto })
	@Post()
	create(@Body() createLanguageModuleDto: CreateLanguageModuleDto) {
		return this.languageModulesService.create(createLanguageModuleDto);
	}

	@Get()
	findAll() {
		return this.languageModulesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.languageModulesService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateLanguageModuleDto: UpdateLanguageModuleDto,
	) {
		return this.languageModulesService.update(+id, updateLanguageModuleDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.languageModulesService.remove(+id);
	}
}
