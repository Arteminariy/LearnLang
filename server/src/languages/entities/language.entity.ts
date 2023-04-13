import { ForeignKey, HasMany, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { LanguageModule } from 'src/language-modules/entities/language-module.entity';

interface LanguageCreationAttributes {
	title: string;
}

@Table({ tableName: 'languages', createdAt: false, updatedAt: false })
export class Language extends Model<Language, LanguageCreationAttributes> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => LanguageModule)
	@HasMany(() => LanguageModule)
	modulesIds: LanguageModule[];
}
