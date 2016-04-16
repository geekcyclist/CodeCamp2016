var employeeList = [];
fillEmployeeList();
writeListToPage();

function writeListToPage(){
    var empListElem = document.getElementById("empList");
    // create a DocumentFragment
    var fragment = document.createDocumentFragment();
    for(var i = 0; i < employeeList.length; i++)
    {
        var empElem = document.createElement("li");
        empElem.appendChild(document.createTextNode(employeeList[i].toString));
        //append to the fragment rather than the element
        //empListElem.appendChild(empElem);
        fragment.appendChild(empElem);
    }
    empListElem.appendChild(fragment); //append all childern at once
}

function fillEmployeeList(){
    var divisionList = company[0].divisions,
        divisionEmployees,
        divisionName,
        currentEmployee;
    
    for(var i = 0; i < divisionList.length; i++) {
        divisionEmployees = divisionList[i].employees.filter( function(item){
            return item.isActive;
        }).sort(function(a, b){
            //reverse sorting so it's obvious we are on the second example
            return a.name.last == b.name.last ? 0 : +(a.name.last < b.name.last) || -1;
        });
        divisionName = divisionList[i].divisionName;
        
        for(var j = 0; j < divisionEmployees.length; j++) {
            currentEmployee = divisionEmployees[j];
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
    this.toString = division + ': ' + firstName + ' ' + lastName; 
}