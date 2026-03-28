using carworkshop from '../db/ZCM_VS_2703';

service CarWorkshopService {
    entity Cars as projection on carworkshop.Cars;
}