import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles-auth.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { AddLanguageDto } from './dto/add-language.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
		return this.userService.findAll(limit, offset);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(+id);
	}

	@ApiOperation({ summary: 'Выдать роль' })
	@ApiResponse({ status: 200 })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Post('/roles')
	addRole(@Body() addRoleDto: AddRoleDto) {
		return this.userService.addRole(addRoleDto);
	}

	@ApiOperation({ summary: 'Выбрать язык' })
	@ApiResponse({ status: 200 })
	@Roles('USER')
	@UseGuards(RolesGuard)
	@Post('/languages')
	addLanguage(@Body() addLanguageDto: AddLanguageDto) {
		return this.userService.addLanguage(addLanguageDto);
	}
}
