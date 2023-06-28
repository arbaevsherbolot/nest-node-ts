import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World👋🏻';
  }

  getName(req: any, res: any): any {
    const { name } = req.params;

    res.send(`Hi ${name}`);
  }
}
