import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageModulesService } from './language-modules.service';
import { CreateLanguageModuleDto } from './dto/create-language-module.dto';
import { UpdateLanguageModuleDto } from './dto/update-language-module.dto';

@Controller('language-modules')
export class LanguageModulesController {
  constructor(private readonly languageModulesService: LanguageModulesService) {}

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
  update(@Param('id') id: string, @Body() updateLanguageModuleDto: UpdateLanguageModuleDto) {
    return this.languageModulesService.update(+id, updateLanguageModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageModulesService.remove(+id);
  }
}
