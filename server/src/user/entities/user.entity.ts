import { ApiProperty } from '@nestjs/swagger';
import {
	BelongsToMany,
	Column,
	DataType,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/entities/role.entity';
import { UserLanguage } from './user-language.entity';
import { UserRoles } from 'src/roles/entities/user-roles.entity';

interface UserCreationAttribute {
	login: string;
	password: string;
	roleId: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttribute> {
	@ApiProperty({ description: 'ID языкового модуля', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({ description: 'Логин пользователя', example: 'Babylon' })
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	login: string;

	@ApiProperty({ description: 'Пароль пользователя', example: 'Vampire' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string;

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[];

	@HasMany(() => UserLanguage)
	userLanguages: UserLanguage[];
}
