import { Controller } from '@nestjs/common';
import {DatabaseService} from './database.service';
import {initOrder, OrderFruits} from "./database.initDB";

@Controller('database')
export class DatabaseController {
    constructor(private databaseService: DatabaseService) {
        this.databaseService.drop();
        this.initDB(initOrder)
    }
    initDB(initOrder:OrderFruits[]){
        initOrder.map(async (data) => {await this.databaseService.create(data)}  )
    }

}

