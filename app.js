"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_1 = require("./employee");
const app = express_1.default();
const port = 3000;
let ptoclient = getEmployee();
console.log(ptoclient);
app.get('/employee', (req, res) => {
    res.send(ptoclient);
});
function getEmployee() {
    let p = new employee_1.Employee();
    p.Empid = "16MIS0030";
    p.Dept = "Engineering";
    p.Name = "Aravindan";
    return p;
}
app.listen(port, () => {
    return console.log("server is running... on 3000");
});
//# sourceMappingURL=app.js.map