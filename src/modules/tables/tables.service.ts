import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto.js';
import { UpdateTableDto } from './dto/update-table.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class TablesService {

    constructor(
        @InjectRepository(Table)
        private readonly tableRepository: Repository<Table>,
    ) { }

    async create(createTableDto: CreateTableDto): Promise<Table> {
        const table = this.tableRepository.create(createTableDto)
        return this.tableRepository.save(table);
    }

    findAll() {
        return `This action returns all tables`;
    }

    findOne(id: number) {
        return `This action returns a #${id} table`;
    }

    update(id: number, updateTableDto: UpdateTableDto) {
        return `This action updates a #${id} table`;
    }

    remove(id: number) {
        return `This action removes a #${id} table`;
    }
}
