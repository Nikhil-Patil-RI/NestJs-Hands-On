import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ExampleGuard } from './guards.guard';

@Controller('guards')
// @UseGuards(new ExampleGuard())
export class GuardsController {
  @Get('/findAll')
//   @UseGuards(new ExampleGuard())
  findAll(): string {
    return 'This action returns all guards';
  }

  @Post('/add')
  add(): string {
    return 'This action adds a new guard';
  }
}
