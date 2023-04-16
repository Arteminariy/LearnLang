import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface RoleCreationAttributes {
	title: string;
}
@Table({ tableName: 'roles', createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleCreationAttributes> {
	@ApiProperty({ description: 'ID пользователя', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({ description: 'Название роли', example: 'ADMIN' })
	@Column({
		type: DataType.STRING,
		unique: true,
	})
	title: string;
}
