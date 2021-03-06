import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TvShowModule } from './tv-show/tv-show.module';
import { MyShowsModule } from './my-shows/my-shows.module';
import { DatabaseService } from './database/database.service';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TvShowModule,
		MyShowsModule
	]
})
export class ApplicationModule { }
