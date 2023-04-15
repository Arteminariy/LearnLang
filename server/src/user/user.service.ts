import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private userRepository: typeof User) {}
	async create(createUserDto: CreateUserDto) {
		try {
			const user = await this.userRepository.create(createUserDto);
			if (!user) {
				throw new HttpException(
					`Не получилось создать нового пользователя`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return user;
		} catch (error) {
			return new HttpException(
				'Ошибка при создании нового пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const users = await this.userRepository.findAll();
			if (!users) {
				throw new HttpException(
					`Не получилось получить пользователей`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return users;
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
}
