import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UserLanguage } from './entities/user-language.entity';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [SequelizeModule.forFeature([User, UserLanguage])],
})
export class UserModule {}
