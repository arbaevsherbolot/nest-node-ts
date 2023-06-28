import { Controller, Get, Param } from '@nestjs/common';

const users = [
  {
    id: '1',
    name: 'Sher',
  },
  {
    id: '2',
    name: 'Bill',
  },
  {
    id: '3',
    name: 'John',
  },
  {
    id: '4',
    name: 'Elcho',
  },
];

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return users;
  }

  @Get(':id')
  getUser(@Param() params) {
    const { id } = params;

    const user = users.find((user) => user.id === id);

    return user ? `User ${user.name} 🔥` : 'Unknown User 🥲';
  }
}
