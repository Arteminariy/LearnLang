import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Logger,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './entities/language.entity';

@ApiTags('Языки')
@Controller('languages')
export class LanguagesController {
	private logger = new Logger();
	constructor(private readonly languagesService: LanguagesService) {}

	@ApiOperation({ summary: 'Создать новый язык' })
	@ApiResponse({
		status: 201,
		description: 'Язык успешно создан',
		type: Language,
	})
	@ApiBody({ type: CreateLanguageDto })
	@Post()
	create(@Body() createLanguageDto: CreateLanguageDto) {
		return this.languagesService.create(createLanguageDto);
	}

	@ApiOperation({ summary: 'Получить языки' })
	@ApiResponse({
		status: 200,
		description: 'Языки успешно получены',
		type: [Language],
	})
	@Get()
	findAll() {
		this.logger.log('Get запрос на /api/languages/');
		return this.languagesService.findAll();
	}

	@ApiOperation({ summary: 'Получить язык' })
	@ApiResponse({
		status: 200,
		description: 'Язык успешно получен',
		type: Language,
	})
	@Get(':id')
	findOne(
		@Param('id') id: string,
		@Body() module: boolean,
		lesson: boolean,
		steps: boolean,
	) {
		return this.languagesService.findOne(+id, module, lesson, steps);
	}

	@ApiOperation({ summary: 'Обновить язык' })
	@ApiResponse({
		status: 200,
		description: 'Язык успешно обновлён',
		type: Language,
	})
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateLanguageDto: UpdateLanguageDto,
	) {
		return this.languagesService.update(+id, updateLanguageDto);
	}

	@ApiOperation({ summary: 'Добавить языковой модуль' })
	@ApiResponse({
		status: 200,
		description: 'Языковой модуль успешно добавлен',
		type: Language,
	})
	@ApiOperation({ summary: 'Удалить язык' })
	@ApiResponse({
		status: 200,
		description: 'Язык успешно удалён',
		type: 'Удалено успешно',
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.languagesService.remove(+id);
	}
}
