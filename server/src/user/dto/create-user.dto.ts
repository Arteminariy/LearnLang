import { IsString, Length } from 'class-validator';

export class CreateUserDto {
	@IsString({ message: 'Должно быть строкой' })
	readonly login: string;
	@Length(8, 32, {
		message: 'Пароль должен быть не меньше 8 и не больше 32 символов',
	})
	readonly password: string;
}
