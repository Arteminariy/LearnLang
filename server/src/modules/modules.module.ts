import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module as LModule } from './entities/module.entity';

@Module({
	controllers: [ModulesController],
	providers: [ModulesService],
	imports: [SequelizeModule.forFeature([LModule])],
})
export class ModulesModule {}
