

const MemoryDB = require('./in-memory-db')


const instance = new MemoryDB();

const DB_NAME_EMPLOYEE = 'employees';
const DB_NAME_ROLES = 'roles';




module.exports = {

    getAll : function getAll(){

        let roles = instance.getDB('roles');

        const results = []
        roles.visit((item)=>{
            results.push({...item});
        })
        console.log("all roles",results);
        return results;
    },

    /**
     *
     * @param code
     * @returns {IRole|undefined}
     */
    getByCode     :function getByCode(code='') {

        let roles = instance.getDB(DB_NAME_ROLES);

        const result = []

        instance.getDB(DB_NAME_EMPLOYEE).visit((item)=>{

            if(code === item.role_code){
                result.push({...item});
            }
        })

        return result[0];
    },

    search        :function searchByCode(name='') {

        let roles = instance.getDB('roles');

        const result = []
        roles.visit((item)=>{

            if(item.role_code.toLowerCase().includes(name)){
                let role = { ...item};
                result.push(role);
            }
        })

        return result;
    },

    /**
     *
     * @param {IRole} data
     */
    save  : function save(data){

        let roles = instance.getDB(DB_NAME_ROLES);

        const db = roles;

        const newItem = {...data,id: db.lastId + 1};

        db.set(newItem);

        return newItem;
    }

};

/**
 *
 * @returns {{role_name: string, role_code: string, id: number}}
 * @constructor
 */
function RoleDTO() {
    return  { "id": 5, "role_code": "hammergod", "role_name": "God Of Hammers" };
}

/**
 * @typedef {{role_name: string, role_code: string, id: number}} IRole
 */
