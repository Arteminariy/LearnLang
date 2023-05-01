import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/entities/role.entity';
import { AddRoleDto } from './dto/add-role.dto';
import { AddLanguageDto } from './dto/add-language.dto';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		private roleService: RolesService,
	) {}
	async create(createUserDto: CreateUserDto) {
		try {
			const user = await this.userRepository.create(createUserDto);
			if (!user) {
				throw new HttpException(
					`Не получилось создать нового пользователя`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			const role = await this.roleService.findOne('USER');
			await user.$set('roles', [role.id]);
			user.roles = [role];
			return user;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll(limit: number, offset: number) {
		try {
			const { count, rows } = await this.userRepository.findAndCountAll({
				limit: limit,
				offset: offset,
				include: { all: true },
			});
			if (!rows) {
				throw new HttpException(
					`Не получилось получить пользователей`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return { count, rows };
		} catch (error) {
			return new HttpException(
				'Ошибка при получении пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async findOne(id: number) {
		try {
			const user = await this.userRepository.findOne({
				where: { id },
			});
			if (!user) {
				throw new HttpException(
					`Не получилось получить пользователя`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return user;
		} catch (error) {
			return new HttpException(
				'Ошибка при получении пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		try {
			const user = await this.userRepository.findByPk(id);
			if (!user) {
				throw new HttpException(
					`Пользователь c id: ${id} не найден`,
					HttpStatus.NOT_FOUND,
				);
			}
			await user.update(updateUserDto);
			return user;
		} catch (error) {
			return new HttpException(
				'Ошибка при изменении пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		return `This action removes a #${id} user`;
	}

	async getByLogin(login: string) {
		const user = await this.userRepository.findOne({
			where: { login },
			include: { model: Role },
		});
		return user;
	}
	async addRole(addRoleDto: AddRoleDto) {
		const user = await this.userRepository.findByPk(addRoleDto.userId);
		const role = await this.roleService.findOne(addRoleDto.value);
		if (user && role) {
			await user.$add('role', role.id);
			return addRoleDto;
		}
		throw new HttpException(
			'Пользователь или роль не найдены',
			HttpStatus.NOT_FOUND,
		);
	}
	async addLanguage(addLanguageDto: AddLanguageDto) {
		return addLanguageDto;
	}
}
