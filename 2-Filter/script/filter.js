var employeeList = [];

console.time("fill list");
fillEmployeeList();
console.timeEnd("fill list");
console.log(employeeList.length);

//filter for active = true
function fillEmployeeList(){
    var divisionList = company[0].divisions,
        divisionEmployees,
        divisionName,
        currentEmployee;
    
    for(var i = 0; i < divisionList.length; i++) {
        divisionEmployees = divisionList[i].employees;
        divisionName = divisionList[i].divisionName;
        for(var j = 0; j < divisionEmployees.length; j++) {
            currentEmployee = divisionEmployees[j];
            if(currentEmployee.isActive){ // don't use isActive === true!!
                var emp = new Employee(
                   currentEmployee.name.first,
                    currentEmployee.name.last,    
                    currentEmployee.email,
                    divisionName               
                )
                employeeList.push(emp);
            }
        }                                                           
    }
}


function Employee (firstName, lastName, email, division){
    this.firstName = firstName;
    this.lastName = lastName;
    this.division = division;
    this.fullName = firstName + ' ' + lastName;
    switch (division){
        case 'Administration':
            this.location = '10th Floor';
            break;
        case 'HR':
            this.location = '6th Floor';
            break;
        case 'Development':
            this.location = 'Satellite Campus';
            break;
        default:
            alert(this.fullName + ' should move to the parking garage with ' +
                               'thier red Swingline(TM) stapler.' );
    }
}