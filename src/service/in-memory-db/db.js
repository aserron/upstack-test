"use strict";
const loader = require('./loader');

class InMemoryDatabase {
    constructor() {
        this.db = {};
        this.beforeAddListeners = createObserver();
        this.afterAddListeners = createObserver();

        this.lastId = 0;
    }
    set(newValue) {
        this.beforeAddListeners.publish({
            newValue,
            value: this.db[newValue.id],
        });
        this.db[newValue.id] = newValue;
        this.afterAddListeners.publish({
            value: newValue,
        });

        this.lastId = newValue.id;
    }
    get(id) {
        return this.db[id];
    }
    onBeforeAdd(listener) {
        return this.beforeAddListeners.subscribe(listener);
    }
    onAfterAdd(listener) {
        return this.afterAddListeners.subscribe(listener);
    }
    // Vistor
    visit(visitor) {
        Object.values(this.db).forEach(visitor);
    }

    // Strategy
    selectBest(scoreStrategy) {
        const found = {
            max: 0,
            item: undefined,
        };
        Object.values(this.db).reduce((f, item) => {
            const score = scoreStrategy(item);
            if (score >= f.max) {
                f.max = score;
                f.item = item;
            }
            return f;
        }, found);
        return found.item;
    }
}

function createObserver() {
    let listeners = [];
    return {
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter((l) => l !== listener);
            };
        },
        publish: (event) => {
            listeners.forEach((l) => l(event));
        },
    };
}
// Factory pattern
function createDatabase() {
    return new InMemoryDatabase();
}


// Adapter pattern
class MemoryDBAdapter {

    constructor(dbname) {
        this.name = dbname;
        this.db = createDatabase();
        this.dbs = {
            employees: createDatabase(),
            roles    : createDatabase(),
        }
        this.initialize();
    }

    initialize (){



        // require('employees.json')

        const urls = [
            'employees.json',
            'roles.json'
        ];
        urls.forEach((url)=>{

            let dbname = url.split('.')[0];

            loader(url, this);

            this.getDB(dbname).visit((item) => {
                console.log(item.id,item);
            });


        })

    }

    getDB(dbname=''){
        if(!dbname){
            return this.db;
        }
        else if(!this.dbs[dbname]){
            throw new Error(`no database name=${dbname}`)
        }
        else {
            return this.dbs[dbname]
        }

    }

    addRecord(record,dbname='') {
        this.getDB(dbname).set(record);
    }

    getRecordId(id,dbname=''){
        return this.getDB(dbname).get(id);
    };


}



// const MemoryDB = createDatabase();
// const unsubscribe = MemoryDB.instance.onAfterAdd(({ value }) => {
//     console.log(value);
// });

module.exports = MemoryDBAdapter;
