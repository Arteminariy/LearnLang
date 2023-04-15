import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lesson } from './entities/lesson.entity';

@Module({
	controllers: [LessonsController],
	providers: [LessonsService],
	imports: [SequelizeModule.forFeature([Lesson])],
})
export class LessonsModule {}
