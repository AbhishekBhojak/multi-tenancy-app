import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './tags.entity';
import { TagController } from './tags.controller';
import { TagService } from './tags.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tags])],
    providers: [TagService],
    controllers: [TagController],
})
export class TagModule { }
