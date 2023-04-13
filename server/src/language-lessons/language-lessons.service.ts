import { Injectable } from '@nestjs/common';
import { CreateLanguageLessonDto } from './dto/create-language-lesson.dto';
import { UpdateLanguageLessonDto } from './dto/update-language-lesson.dto';

@Injectable()
export class LanguageLessonsService {
  create(createLanguageLessonDto: CreateLanguageLessonDto) {
    return 'This action adds a new languageLesson';
  }

  findAll() {
    return `This action returns all languageLessons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLesson`;
  }

  update(id: number, updateLanguageLessonDto: UpdateLanguageLessonDto) {
    return `This action updates a #${id} languageLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLesson`;
  }
}
