var employeeList = [];

console.time("fill list");
fillEmployeeList();
console.timeEnd("fill list");
console.log(employeeList.length);

//Cache Loop Invariant Data
function fillEmployeeList(){
    for(var i = 0; i < company[0].divisions.length; i++) {
        for(var j = 0; j < company[0].divisions[i].employees.length; j++) {
            var emp = new Employee(
                company[0].divisions[i].employees[j].name.first,    //5
                company[0].divisions[i].employees[j].name.last,     //5
                company[0].divisions[i].employees[j].email,         //4
                company[0].divisions[i].divisionName                //3
            )
            employeeList.push(emp);
        }                                                           //17 * 225 = 3825
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