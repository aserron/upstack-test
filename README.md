# upstack-test

Question 4/4

"Node.JS Challenge #1 - Employee API"

Your solution will be scored against a series of unit test cases and a grading script.

EXERCISE TEXT

For this task, you will need to create a Rest API that manipulates employee data. In order to accomplish this, you will
need to complete the following steps:

First thing’s first, you can use the Internet to research documentation/commands for this
Open a terminal (Ctrl + J) and create a new folder called upstack-test (use the mkdir upstack-test command). Use the
command cd upstack-test to move to that folder.
Create a file called employees.json, which will contain some Employee data that will be provided below.
Create a file called roles.json which will contain some Role data that will be provided below.
Once that is finished, you need to create the Rest API. Ideally, you should use express. Note that you may need to
install it in your project folder (npm install express).
Create class mappings for each entity, based on the data from the JSON files.
Using any design patterns and choices you see fit, implement the following Controllers/Services and methods

Employee
- SearchEmployeesByName() (Route: employees/search/:name, method: GET)
- GetEmployees() (Route: employees/all, method: GET)
- SaveEmployee(EmployeeViewObject employee) (Route: employees/save, method: POST)
Roles
- GetRoles() (Route: roles/all, method: GET)
- GetRoleByCode() (Route: roles/search/:code, method: GET)
- SaveRole(RoleViewObject role) (Route: roles/save, method: POST)

THINGS TO CONSIDER

The app must run on port 3001. Please use this exact port because it is used in grading your solution. The URL on which
the app runs is displayed on your top left corner of the Workspace, just change the port to 3001 when running your Node
server.
Save methods don’t need to persist any data to the files, but the implementation should mimic the behavior of a method
that persist something to a file/database
Search methods are case insensitive and should return all entries that contain the search string on the given property
While this is only an API, please take into consideration the fact that when returning employee details, the view object
should contain the role name and role code somewhere in order for them to be potentially displayed
An employee must always have a role assigned to them; take that into account when creating the SaveEmployee method
Employee username and email must be unique, so take that into consideration when implementing the method
Role codes must be unique
EmployeeViewObject and RoleViewObject are names that designate that the object is used in a view; you can name the
classes as you desire
Use any and all data validation rules that you see fit

JSON DATA FOR EMPLOYEES.JSON

``` language="json"

    {
    
        "employees": [
        
            { "id": 1, "name": "Tony Stark", "email": "tony.stark@avengers.com", "username": "tonystark", "role_id": 1},
        
            { "id": 2, "name": "Steve Rogers", "email": "steve.rogers@avengers.com", "username": "steverogers", "role_id": 2 },
        
            { "id": 3, "name": "Clint Barton", "email": "clint.barton@avengers.com", "username": "clintbarton", "role_id": 3 },
        
            { "id": 4, "name": "Natasha Romanoff", "email": "natasha.romanoff@avengers.com", "username": "natasharomanoff", "role_id": 4 },
        
            { "id": 5, "name": "Thor Odinson", "email": "thor.odinson@avengers.com", "username": "thorodinson", "role_id": 5 },
        
            { "id": 6, "name": "Nick Fury", "email": "nick.fury@avengers.com", "username": "nickfury", "role_id": 6 },
        
            { "id": 7, "name": "Bruce Banner", "email": "bruce.banner@avengers.com", "username": "brucebanner", "role_id": 7 },
        
            { "id": 8, "name": "Maria Hill", "email": "maria.hill@avengers.com", "username": "mariahill", "role_id": 8 },
        
            { "id": 9, "name": "Bucky Barnes", "email": "bucky.barnes@avengers.com", "username": "buckybarnes", "role_id": 9 },
        
            { "id": 10, "name": "Peter Parker", "email": "peter.parker@avengers.com", "username": "peterparker", "role_id": 10 }
        
        ]
    }
```

JSON DATA FOR ROLES.JSON

``` language=json

    {
        
        "roles": [
        
            { "id": 1, "role_code": "genius", "role_name": "Genius" },
        
            { "id": 2, "role_code": "leader", "role_name": "Leader" },
        
            { "id": 3, "role_code": "quinn", "role_name": "Arrow Man" },
        
            { "id": 4, "role_code": "spy", "role_name": "Master Spy" },
        
            { "id": 5, "role_code": "hammergod", "role_name": "God Of Hammers" },
        
            { "id": 6, "role_code": "organizer", "role_name": "Organizer of Stuff" },
        
            { "id": 7, "role_code": "hulksmash", "role_name": " Smasher Of Things...also scientist" },
        
            { "id": 8, "role_code": "cto", "role_name": "CTO" },
        
            { "id": 9, "role_code": "wintersoldier", "role_name": "Winter Soldier" },
        
            { "id": 10, "role_code": "spiderman", "role_name": "Spiderman" }
        
        ]
    
    }
    
```
