import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	

  public async batchRolBack(): Promise<void> {
    console.log("batchRolBack");
  }

  public async batchProperties(): Promise<void> {
    console.log('batchProperties');
  }

  public async batchAgents(): Promise<void> {
    console.log('batchAgents');
  }
  
  getHello(): string {
		return 'Welcome to Nestar batch server';
	}
}
