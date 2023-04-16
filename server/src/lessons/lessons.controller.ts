import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Lesson } from './entities/lesson.entity';

@ApiTags('Уроки')
@Controller('lessons')
export class LessonsController {
	constructor(private readonly lessonsService: LessonsService) {}

	@ApiOperation({ summary: 'Создать новый урок' })
	@ApiResponse({
		status: 201,
		description: 'Урок успешно создан',
		type: Lesson,
	})
	@ApiBody({ type: CreateLessonDto })
	@Post()
	create(@Body() createLessonDto: CreateLessonDto) {
		return this.lessonsService.create(createLessonDto);
	}

	@ApiOperation({ summary: 'Получить уроки' })
	@ApiResponse({
		status: 200,
		description: 'Уроки успешно получены',
		type: [Lesson],
	})
	@Get()
	findAll() {
		return this.lessonsService.findAll();
	}

	@ApiOperation({ summary: 'Получить урок' })
	@ApiResponse({
		status: 200,
		description: 'Урок успешно получен',
		type: Lesson,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.lessonsService.findOne(+id);
	}

	@ApiOperation({ summary: 'Обновить урок' })
	@ApiResponse({
		status: 200,
		description: 'Урок успешно обновлён',
		type: Lesson,
	})
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
		return this.lessonsService.update(+id, updateLessonDto);
	}

	@ApiOperation({ summary: 'Удалить урок' })
	@ApiResponse({
		status: 200,
		description: 'Урок успешно удалён',
		type: 'Удалено успешно',
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.lessonsService.remove(+id);
	}
}
