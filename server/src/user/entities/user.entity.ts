import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttribute {
	login: string;
	password: string;
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

	@ApiProperty({ description: 'Логин', example: 'Babylon' })
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	login: string;

	@ApiProperty({ description: 'Пароль', example: 'Vampire' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string;
}
