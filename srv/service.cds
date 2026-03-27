using carworkshop from '../db/schema';

service CarWorkshopService {
    entity Cars as projection on carworkshop.Cars;
}