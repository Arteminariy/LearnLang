import { Injectable } from '@nestjs/common';
import { CreateLanguageModuleDto } from './dto/create-language-module.dto';
import { UpdateLanguageModuleDto } from './dto/update-language-module.dto';

@Injectable()
export class LanguageModulesService {
  create(createLanguageModuleDto: CreateLanguageModuleDto) {
    return 'This action adds a new languageModule';
  }

  findAll() {
    return `This action returns all languageModules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageModule`;
  }

  update(id: number, updateLanguageModuleDto: UpdateLanguageModuleDto) {
    return `This action updates a #${id} languageModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageModule`;
  }
}
