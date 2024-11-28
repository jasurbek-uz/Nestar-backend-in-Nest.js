import { Controller, Get, Logger } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Cron, Interval, Timeout } from "@nestjs/schedule";
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERTIES } from "./lib/config";

@Controller()
export class NestarBatchController {
	private logger: Logger = new Logger('BatchController');
	constructor(private readonly BatchService: BatchService) {}

	@Timeout(1000)
	handleTimeout() {
		this.logger.debug('BATCH SERVER READY');
	}
	@Cron('00 ***', { name: BATCH_ROLLBACK })
  public async batchRolBack() {
    try {
      this.logger.debug['context'] = BATCH_ROLLBACK;
      this.logger.debug('EXECUTED');
      await this.BatchService.batchRolBack();
    } catch (err) {
      this.logger.error(err);
    }
	}

	@Cron('20 ***', { name: BATCH_TOP_PROPERTIES })
  public async batchProperties() {
    try {
    this.logger.debug['context'] = BATCH_TOP_PROPERTIES;
      this.logger.debug('EXECUTED');
       await this.BatchService.batchTopProperties();
			} catch (err) {
				this.logger.error(err);
			}
		
	}

	@Cron('40 ***', { name: BATCH_TOP_AGENTS })
  public async batchAgents() {
    try {
     this.logger.debug['context'] = BATCH_TOP_AGENTS;
      this.logger.debug('EXECUTED');
      await this.BatchService.batchTopAgents();
			} catch (err) {
				this.logger.error(err);
			}
	}

	@Interval(1000)
	handleInterval() {
		this.logger.debug('INTERNAL TEST');
	}

	@Get()
	getHello(): string {
		return this.BatchService.getHello();
	}
}
