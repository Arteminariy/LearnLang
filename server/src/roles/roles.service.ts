import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

	async create(createRoleDto: CreateRoleDto) {
		const role = await this.roleRepository.create(createRoleDto);
		return role;
	}

	findAll() {
		return `This action returns all roles`;
	}

	async findOne(value: string) {
		const role = await this.roleRepository.findOne({
			where: { title: value },
		});
		return role;
	}

	update(id: number, updateRoleDto: UpdateRoleDto) {
		return `This action updates a #${id} role`;
	}

	remove(id: number) {
		return `This action removes a #${id} role`;
	}
}
