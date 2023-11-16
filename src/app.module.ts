import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [TasksModule, TestModule],
})
export class AppModule {
  
}
