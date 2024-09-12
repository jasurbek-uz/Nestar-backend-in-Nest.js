import { Controller, Get } from '@nestjs/common';
import { BatchService } from './batch.service';

@Controller()
export class NestarBatchController {
	constructor(private readonly nestarBatchService: BatchService) {}

	@Get()
	getHello(): string {
		return this.nestarBatchService.getHello();
	}
}
