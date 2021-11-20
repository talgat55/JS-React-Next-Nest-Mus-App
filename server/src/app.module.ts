import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
// import { join } from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '..', 'client'),
        // }),
        MongooseModule.forRoot('mongodb://localhost/nest'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}
