//define function name
function EmployeeInfo(name,Salary){
    console.log(" Welcome " + name+ " Your monthly Salary is "+ Salary)
}
console.log("This is my first progame")
var EmpName="Antima"
var EmpSalary= 14000
// calling of the function employeeInfo
EmployeeInfo(EmpName,EmpSalary)

//Code for 2nd Exercise
const EmpSkill=(skills)=>{
    console.log("Expert in " + skills)
}
EmpSkill("JAVA")
const student= require('./StudentInfo')
const person= require('./Person')
//bcoz getName is the function so we use()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
//bcoz dob is a variable so we donot use()
console.log(student.Studentgrade())
console.log("grade is " +student.Studentgrade(55)) 
//creating new person
person1=new person("Antima", "Nepal","antima@gmail.com")
console.log("using Person Module", person1.getPersonInfo()
)
console.log("Programe ended")
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")

