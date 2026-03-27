const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const carData = [
        { ID: 1,  brand: "Maruti",   model: "Swift",    ownerName: "Anuj",  serviceType: "Oil Change",      mechanicName: "Suresh", status: "Done",       cost: 1500 },
        { ID: 2,  brand: "Honda",    model: "City",     ownerName: "Bhavuk",   serviceType: "Brake Service",   mechanicName: "Mahesh", status: "Done",       cost: 3500 },
        { ID: 3,  brand: "Toyota",   model: "Innova",   ownerName: "Sameer",    serviceType: "Full Service",    mechanicName: "Rajesh", status: "Pending",    cost: 8000 },
        { ID: 4,  brand: "Hyundai",  model: "i20",      ownerName: "Shrey",    serviceType: "Tyre Change",     mechanicName: "Suresh", status: "Done",       cost: 12000 },
        { ID: 5,  brand: "Tata",     model: "Nexon",    ownerName: "Sanket",  serviceType: "AC Service",      mechanicName: "Mahesh", status: "InProgress", cost: 2500 },
        { ID: 6,  brand: "Ford",     model: "EcoSport", ownerName: "Shreesh",  serviceType: "Battery Replace", mechanicName: "Rajesh", status: "Done",       cost: 4500 },
        { ID: 7,  brand: "Renault",  model: "Kwid",     ownerName: "Rahul",   serviceType: "Oil Change",      mechanicName: "Suresh", status: "Pending",    cost: 1200 },
        { ID: 8,  brand: "Kia",      model: "Seltos",   ownerName: "Tanuj",   serviceType: "Full Service",    mechanicName: "Mahesh", status: "Done",       cost: 9000 },
        { ID: 9,  brand: "MG",       model: "Hector",   ownerName: "Vikas",  serviceType: "Wheel Alignment", mechanicName: "Rajesh", status: "InProgress", cost: 1800 },
        { ID: 10, brand: "Mahindra", model: "XUV700",   ownerName: "Abhishek",  serviceType: "Brake Service",   mechanicName: "Suresh", status: "Pending",    cost: 5000 }
    ];

    this.on('READ', 'Cars', async (req) => {
        return carData;
    });

});