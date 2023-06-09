import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UserLanguage } from './entities/user-language.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserRoles } from 'src/roles/entities/user-roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [
		SequelizeModule.forFeature([User, UserLanguage, Role, UserRoles]),
		RolesModule,
		forwardRef(() => AuthModule),
	],
	exports: [UserService],
})
export class UserModule {}
