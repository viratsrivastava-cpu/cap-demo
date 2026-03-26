namespace my.company;  

entity Employees {
    key ID    : Integer;
    name      : String(100);
    salary    : Decimal(10,2);
}
//namespace = ek logical group name hota,entities ko unique naam ,Agar namespace nahi hota to multiple projects me name conflict ho sakta hai.
//entity = CAP me database table define karta hai.Employees = table ka naam
// key = primary key,unique value taki duplicacy na ho . ID = column name . interger datatype
// name      : String(100); =text datatype aur 100 word max limit h
// salary    : Decimal(10,2); = mtlb integer vue 1o digit tk ki aur 2 digit tk ki decimal value