import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
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
        const existingTable = await this.tableRepository.findOne({
            where: { number: createTableDto.number }
        })

        if (existingTable) {
            throw new ConflictException(
                `A table with number ${createTableDto.number} already exist!`
            )
        }

        const table = this.tableRepository.create(createTableDto)
        return this.tableRepository.save(table);

    }

    async findAll(): Promise<Table[]> {

        return this.tableRepository.find();

    }

    async findOne(id: string): Promise<Table> {

        const table = await this.tableRepository.findOne({ where: { id } })

        if (!table) {
            throw new BadRequestException(Error)
        }

        return table
    }

    async update(id: string, updateTableDto: UpdateTableDto): Promise<{message: string; table:Table}> {

        const table = await this.findOne(id)

        if (!table) {
            throw new BadRequestException(Error)
        }

        Object.assign(table, updateTableDto)
        
        const updatedTable = await this.tableRepository.save(table)
        return {
            message: 'Mesa actualizada correctamente',
            table: updatedTable
        };
    }

    remove(id: string) {
        return `This action removes a #${id} table`;
    }
}