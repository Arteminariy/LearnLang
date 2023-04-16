import { ApiProperty } from '@nestjs/swagger';
import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript';
import { Language } from 'src/languages/entities/language.entity';
import { User } from './user.entity';

interface UserLanguageCreationAttributes {
	languageId: number;
	userId: number;
	progress: string;
}
@Table({ tableName: 'user-languages', createdAt: false, updatedAt: false })
export class UserLanguage extends Model<
	UserLanguage,
	UserLanguageCreationAttributes
> {
	@ApiProperty({ description: 'ID пользователя', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ForeignKey(() => Language)
	@Column({
		type: DataType.INTEGER,
	})
	languageId: number;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
	})
	userId: number;

	@BelongsTo(() => User)
	user: User;

	@HasOne(() => Language)
	language: Language;
}
