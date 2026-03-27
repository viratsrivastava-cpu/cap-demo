namespace carworkshop;

entity Cars {
    key ID          : Integer;
    brand           : String(50);
    model           : String(50);
    ownerName       : String(100);
    serviceType     : String(100);
    mechanicName    : String(100);
    status          : String(20);
    cost            : Decimal(10,2);
}