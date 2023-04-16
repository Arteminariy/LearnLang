import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsController } from './steps.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Step } from './entities/step.entity';

@Module({
	controllers: [StepsController],
	providers: [StepsService],
	imports: [SequelizeModule.forFeature([Step])],
})
export class StepsModule {}
