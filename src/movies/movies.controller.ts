import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(readonly moviesService: MoviesService) {}

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') id: number) {
        console.log(typeof id);
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() data: CreateMovieDto) {
        return this.moviesService.create(data);
    }

    @Delete("/:id")
    remove(@Param('id') id: number) {
        return this.moviesService.deleteOne(id);
    }

    @Patch("/:id")
    patch(@Param('id') id: number, @Body() data: UpdateMovieDto) {
        return this.moviesService.update(id, data);
    }
}
