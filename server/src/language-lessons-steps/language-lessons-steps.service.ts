import { Injectable } from '@nestjs/common';
import { CreateLanguageLessonsStepDto } from './dto/create-language-lessons-step.dto';
import { UpdateLanguageLessonsStepDto } from './dto/update-language-lessons-step.dto';

@Injectable()
export class LanguageLessonsStepsService {
  create(createLanguageLessonsStepDto: CreateLanguageLessonsStepDto) {
    return 'This action adds a new languageLessonsStep';
  }

  findAll() {
    return `This action returns all languageLessonsSteps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLessonsStep`;
  }

  update(id: number, updateLanguageLessonsStepDto: UpdateLanguageLessonsStepDto) {
    return `This action updates a #${id} languageLessonsStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLessonsStep`;
  }
}
