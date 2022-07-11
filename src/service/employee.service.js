

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

    getByUserName :function getByUserName(name='') {
        let roles = instance.getDB(DB_NAME_ROLES);

        const result = []
        instance.getDB(DB_NAME_EMPLOYEE).visit((item)=>{

            if(name == item.username){
                let employee = {
                    ...item,
                    role:{...roles.get(item.role_id)}
                };
                console.log(employee);
                result.push(employee);
            }
        })

        return result[0];
    },
    searchByName  :function searchByName(name='') {
        let roles = instance.getDB('roles');

        const result = []
        instance.getDB(DB_NAME_EMPLOYEE).visit((item)=>{

            if(item.name.toLowerCase().includes(name)){
                let employee = {
                    ...item,
                    role:{...roles.get(item.role_id)}
                };
                console.log(employee);
                result.push(employee);
            }
        })

        return result;
    },

    getAllRoles : function(){

    }
};
