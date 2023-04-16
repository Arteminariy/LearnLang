import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Module } from './entities/module.entity';

@ApiTags('Модули')
@Controller('modules')
export class ModulesController {
	constructor(private readonly modulesService: ModulesService) {}

	@ApiOperation({ summary: 'Создать новый модуль' })
	@ApiResponse({
		status: 201,
		description: 'Модуль успешно создан',
		type: Module,
	})
	@ApiBody({ type: CreateModuleDto })
	@Post()
	create(@Body() createModuleDto: CreateModuleDto) {
		return this.modulesService.create(createModuleDto);
	}

	@ApiOperation({ summary: 'Получить модули' })
	@ApiResponse({
		status: 200,
		description: 'Модули успешно получены',
		type: [Module],
	})
	@Get()
	findAll() {
		return this.modulesService.findAll();
	}

	@ApiOperation({ summary: 'Получить модуль' })
	@ApiResponse({
		status: 200,
		description: 'Модуль успешно получен',
		type: Module,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.modulesService.findOne(+id);
	}

	@ApiOperation({ summary: 'Обновить модуль' })
	@ApiResponse({
		status: 200,
		description: 'Модуль успешно обновлён',
		type: Module,
	})
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
		return this.modulesService.update(+id, updateModuleDto);
	}

	@ApiOperation({ summary: 'Удалить модуль' })
	@ApiResponse({
		status: 200,
		description: 'Модуль успешно удалён',
		type: 'Удалено успешно',
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.modulesService.remove(+id);
	}
}
