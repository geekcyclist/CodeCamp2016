var employeeList = [];
// console.time - quick and dirty with auto logging. Can nest timers
// performance.now() - far more accurate but have to add logging.
//console.time("fill list");
var beginTime = performance.now();
fillEmployeeList();
var endTime = performance.now();
//console.timeEnd("fill list");
console.log("Time to fill list: " + (endTime - beginTime));
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