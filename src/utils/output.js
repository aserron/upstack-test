/**
 * @param {IResultList} list
 * @returns {{total: number, results: IResultList}
 */
exports.createResultOut = function createResultOut(list){
    return {
        total: list.length,
        results: list
    }
}

/**
 * @typedef {IEmployeeList|IRoleList} IResultList
 */

