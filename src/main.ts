import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const PORT = process.env.MODE === 'development' ? process.env.PORT : 777;

async function bootstrap() {
  try {
    dotenv.config();
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () =>
      console.log(`
    

<------------------------------------------------


    
   📢 Server starting on: http://localhost:${PORT}/ ⚡️
    
    
    
----------------------------------------------->

    `),
    );
  } catch (e) {
    console.log(`


<------------------------------------------------


    
   🔴 ERROR when starting a server: ${e.message} ✖︎
     
     
     
----------------------------------------------->

    `);
  }
}

bootstrap();
