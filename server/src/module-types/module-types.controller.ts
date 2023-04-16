import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ModuleTypesService } from './module-types.service';
import { CreateModuleTypeDto } from './dto/create-module-type.dto';
import { UpdateModuleTypeDto } from './dto/update-module-type.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ModuleType } from './entities/module-type.entity';

@ApiTags('Типы модулей')
@Controller('module-types')
export class ModuleTypesController {
	constructor(private readonly moduleTypesService: ModuleTypesService) {}

	@ApiOperation({ summary: 'Создать новый тип модуля' })
	@ApiResponse({
		status: 201,
		description: 'Тип модуля успешно создан',
		type: ModuleType,
	})
	@ApiBody({ type: CreateModuleTypeDto })
	@Post()
	create(@Body() createModuleTypeDto: CreateModuleTypeDto) {
		return this.moduleTypesService.create(createModuleTypeDto);
	}

	@ApiOperation({ summary: 'Получить типы модулей' })
	@ApiResponse({
		status: 200,
		description: 'Типы модулей успешно получены',
		type: [ModuleType],
	})
	@Get()
	findAll() {
		return this.moduleTypesService.findAll();
	}

	@ApiOperation({ summary: 'Получить тип модулей' })
	@ApiResponse({
		status: 200,
		description: 'Тип модулей успешно получен',
		type: ModuleType,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.moduleTypesService.findOne(+id);
	}

	@ApiOperation({ summary: 'Обновить тип модулей' })
	@ApiResponse({
		status: 200,
		description: 'Тип модулей успешно обновлён',
		type: ModuleType,
	})
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateModuleTypeDto: UpdateModuleTypeDto,
	) {
		return this.moduleTypesService.update(+id, updateModuleTypeDto);
	}

	@ApiOperation({ summary: 'Удалить тип модулей' })
	@ApiResponse({
		status: 200,
		description: 'Тип модулей успешно удалён',
		type: 'Удалено успешно',
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.moduleTypesService.remove(+id);
	}
}
