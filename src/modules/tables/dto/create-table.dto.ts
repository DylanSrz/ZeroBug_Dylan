import { IsEnum, IsInt, Min } from 'class-validator'
import { TableZone } from '../enum/table.enum.js'

export class CreateTableDto {

    @IsInt()
    @Min(1)
    number: number

    @IsInt()
    @Min(1)
    capacity: number

    @IsEnum(TableZone)
    zone: TableZone
}
