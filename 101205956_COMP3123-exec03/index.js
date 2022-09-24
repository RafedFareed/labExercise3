var http = require("http");
//TODO - Use Employee Module here
var employee = require('./Employee');
var employees = employee.employees;
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            var namResult = "";
            employees.sort((a, b) => {
                return a.firstName.localeCompare(b.firstName)
            })
            for (let i = 0; i < employees.length; i++) {
                namResult += `${employees[i].firstName} ${employees[i].lastName} `
            }
            res.write(JSON.stringify(namResult))
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            salResult = ""
            for (let i = 0; i < employees.length; i++) {
                salResult += `${employees[i].firstName} ${employees[i].lastName} - total_salary: ${employees[i].Salary} `
            }
            res.write(JSON.stringify(salResult))
        }
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
