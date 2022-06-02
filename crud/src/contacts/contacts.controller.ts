import { Controller, Get } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post('create')
  async create(@Body() contactData: Contact): Promise<Contact> {
    return this.contactsService.create(contactData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() contactData: Contact): Promise<UpdateResult> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id);
    return this.contactsService.update(contactData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.contactsService.delete(id);
  }
}
