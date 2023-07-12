import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

const users = [
  {
    id: 1,
    name: 'Sher',
  },
  {
    id: 2,
    name: 'Akbar',
  },
  {
    id: 3,
    name: 'Parmeet',
  },
  {
    id: 4,
    name: 'Elcho',
  },
  {
    id: 5,
    name: 'Bekzhan',
  },
  {
    id: 6,
    name: 'Burma',
  },
];

@Controller('api/users')
export class UsersController {
  @Get()
  getUsers() {
    return users;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = users.find((user) => user.id === id);
    return user ? `User: ${user.name} 😎` : 'User is undefind 🥲';
  }
}
