import { TableStatus } from '../enum/table.enum.js';
import { IsEnum } from 'class-validator';

export class UpdateTableStatusDto {

    @IsEnum(TableStatus)
    status: TableStatus
}
