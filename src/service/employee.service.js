const MemoryDB = require('./in-memory-db');

const instance = new MemoryDB();

const DB_NAME_EMPLOYEE = 'employees';
const DB_NAME_ROLES = 'roles';

function getAllEmployee() {

    let roles = instance.getDB('roles');

    const result = [];
    instance.getDB(DB_NAME_EMPLOYEE)
        .visit((item) => {
            let employee = {
                ...item,
                role: { ...roles.get(item.role_id) }
            };
            delete (employee.role_id)
            // console.log(employee);
            result.push(employee);
        });

    return result;
}

module.exports = {

    getAll: getAllEmployee,

    getByUserName: function getByUserName(name = '') {
        let roles = instance.getDB(DB_NAME_ROLES);

        const result = [];
        instance.getDB(DB_NAME_EMPLOYEE)
            .visit((item) => {

                if (item.username === name) {
                    let employee = {
                        ...item,
                        role: { ...roles.get(item.role_id) }
                    };
                    console.log(employee);
                    result.push(employee);
                }
            });

        return result[0];
    },

    getByEmail: function getByEmail(email) {
        let roles = instance.getDB(DB_NAME_ROLES);

        const result = [];

        instance.getDB(DB_NAME_EMPLOYEE)
            .visit((item) => {

                if (item.email === email) {
                    let employee = {
                        ...item,
                        role: { ...roles.get(item.role_id) }
                    };
                    console.log(employee);
                    result.push(employee);
                }
            });

        return result[0];
    },
    searchByName: function searchByName(name = '') {
        let roles = instance.getDB('roles');

        const result = [];
        instance.getDB(DB_NAME_EMPLOYEE)
            .visit((item) => {

                if (item.name.toLowerCase()
                    .includes(name)) {
                    let employee = {
                        ...item,
                        role: { ...roles.get(item.role_id) }
                    };
                    console.log(employee);
                    result.push(employee);
                }
            });

        return result;
    },

    /**
     *
     * @param {IEmployee} employeeData
     */
    saveEmployee: function saveEmployee(employeeData) {

        let roles = instance.getDB(DB_NAME_ROLES);

        const db = instance.getDB(DB_NAME_EMPLOYEE);

        const newItem = {
            ...employeeData,
            id: db.lastId + 1
        };

        newItem.role = roles.get(newItem.role_id);
        db.set(newItem);

        return newItem;
    },

    getAllRoles: function () {

    }
};

/**
 *
 * @returns {{role_id: number, name: string, id: number, email: string, username: string}}
 * @constructor
 */
function EmployeeDTO() {
    return {
        'id': 1,
        'name': 'Tony Stark',
        'email': 'tony.stark@avengers.com',
        'username': 'tonystark',
        'role_id': 1
    };
}

/**
 * @typedef {{role_id: number, name: string, id: number, email: string, username: string}} IEmployee
 */
