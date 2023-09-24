// Write your solution in this file!
const employee = {
        name: "Allan",
        streetAddress: "101 Park Street",
    };

console.log(employee.name);
console.log(employee.streetAddress);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = {...employee};

    employee2[key] = value;

    return employee2;
}

let employee2 = updateEmployeeWithKeyAndValue(
    employee, 
    "name", 
    "Sam"
    );
    
employee2 = updateEmployeeWithKeyAndValue(
    employee2, 
    "streetAddress",
    "1000 Main Street"
    );

/*
console.log(employee.name);
console.log(employee2.name); 
console.log(employee2.streetAddress);
*/


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

let employee3 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "name", 
    "Amanda"
    );
    
employee3 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress",
    "1234 Highlighter Drive"
    );

    console.log(employee.name); 
    console.log(employee.streetAddress);

    function deleteFromEmployeeByKey(employee, key) {
        const employee4 = {...employee};
        delete employee4[key];
        return employee4;
    }

    const updateEmployee = deleteFromEmployeeByKey(employee, "name");

    
        
        console.log(updateEmployee); 

        function destructivelyDeleteFromEmployeeByKey(employee, key) {

            delete employee[key];
            return employee;
        }
    
        const deletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");

        console.log(deletedEmployee);
        console.log(employee);