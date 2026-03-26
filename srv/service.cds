service EmployeeService {
    entity Employees {
        key ID    : Integer;
        name      : String(100);
        salary    : Decimal(10,2);
    }
}
// service EmployeeService = service api create karna, employeservice api url bnaega
// entity Employees =  yeh API endpoin bnaega
//baki wahi same structure define kar raha hai jo database entity me hai.