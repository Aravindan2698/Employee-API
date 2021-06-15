import express from 'express';
import {Employee} from './employee'; 

const app = express();
const port = 3000;

let ptoclient = getEmployee();
console.log(ptoclient);

app.get('/employee',(req,res)=>{
    res.send(ptoclient);
})

function getEmployee()
{
    let p = new Employee();
    p.Empid = "16MIS0030";
    p.Dept = "Engineering";
    p.Name = "Aravindan";
    return p;

}

app.listen(port,err =>{
    if(err){
        return console.error(err);
    }
    return console.log("server is running... on 3000 ");

})