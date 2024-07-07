import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { SupabaseModule } from './libs/supabase/supabase.module';

@Module({
  imports: [ModulesModule, SupabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
