import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.dto';
import { BookPipe } from './book.pipe';

@Controller()
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/getAllBooks')
  getAllBooks(): Book[] {
    return this.bookService.getBooksService();
  }

  @Post('/addBook')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Put('/updateBook')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/deleteBook/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  @Get('/GetBookById/:id')
  getBookById(@Param('id', ParseIntPipe) bookId: number): string {
    console.log(typeof bookId);
    return 'book by id';
  }

  // custom pipe to validate
  // @Post('/addBookWithPipe')
  // addBookWithPipe(@Body(new BookPipe()) book: Book): string {
  //   return this.bookService.addBookPipeService(book);
  // }

  @Post('/addBookWithPipe')
  addBookWithPipe1(@Body(new ValidationPipe()) book: Book): string {
    return this.bookService.addBookPipeService(book);
  }
}
