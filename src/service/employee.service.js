const MemoryDB = require('./in-memory-db')


const instance = new MemoryDB();

const DB_NAME_EMPLOYEE = 'employees';
const DB_NAME_ROLES = 'roles';

function getAllEmployee(){

    let roles = instance.getDB('roles');

    const result = []
    instance.getDB(DB_NAME_EMPLOYEE).visit((item)=>{
        let employee = {
            ...item,
            role:{...roles.get(item.role_id)}
        };
        console.log(employee);
        result.push(employee);
    })

    return result;
}

module.exports = {

    getAll : getAllEmployee,

    getAllRoles : function(){

    }
};
