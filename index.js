const employee = {
    name: '',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){

        const newObj = {...employee};
        newObj[streetAddress] = value;


    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value) {

    employee[streetAddress] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, name){
   const newObj = {...employee};
   
    delete newObj.name;

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    
    delete employee.name;

    return employee;

}