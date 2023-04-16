import { Module } from '@nestjs/common';
import { ModuleTypesService } from './module-types.service';
import { ModuleTypesController } from './module-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModuleType } from './entities/module-type.entity';

@Module({
	controllers: [ModuleTypesController],
	providers: [ModuleTypesService],
	imports: [SequelizeModule.forFeature([ModuleType])],
})
export class ModuleTypesModule {}
