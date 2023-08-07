import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(private readonly carsService: CarsService) {}

  populateDb() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'SEED EXECUTED';
  }
}
