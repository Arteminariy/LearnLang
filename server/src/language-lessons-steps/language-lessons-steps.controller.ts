import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLessonsStepsService } from './language-lessons-steps.service';
import { CreateLanguageLessonsStepDto } from './dto/create-language-lessons-step.dto';
import { UpdateLanguageLessonsStepDto } from './dto/update-language-lessons-step.dto';

@Controller('language-lessons-steps')
export class LanguageLessonsStepsController {
  constructor(private readonly languageLessonsStepsService: LanguageLessonsStepsService) {}

  @Post()
  create(@Body() createLanguageLessonsStepDto: CreateLanguageLessonsStepDto) {
    return this.languageLessonsStepsService.create(createLanguageLessonsStepDto);
  }

  @Get()
  findAll() {
    return this.languageLessonsStepsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLessonsStepsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLessonsStepDto: UpdateLanguageLessonsStepDto) {
    return this.languageLessonsStepsService.update(+id, updateLanguageLessonsStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLessonsStepsService.remove(+id);
  }
}
