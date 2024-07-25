import { Body, Controller, Get, Post } from '@nestjs/common';
import { Tags } from './tags.entity';
import { TagService } from './tags.service';
import { CreateTagDto } from './dto/tags.request';
@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) { }

    @Post()
    create(@Body() createTagDto: CreateTagDto): Promise<Tags> {
        return this.tagService.create(createTagDto);
    }

    @Get()
    findAll(): Promise<Tags[]> {
        return this.tagService.findAll();
    }
}