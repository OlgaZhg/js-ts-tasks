/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

type UserObj = {
  [key: string]: string | number | Record<string, string | number>
}

module.exports.groupUsers = function (users: Array<UserObj>): Record<'employees' | 'contractors', Array<UserObj>> {
  const employeesArr: UserObj[] = users.filter((user: UserObj) =>
    user['type' as string] === 'EMPLOYEE');

  const contractorsArr: UserObj[] = users.filter((user: UserObj) =>
    user['type' as string] === 'CONTRACTOR');

  const resultObj: {employees: UserObj[], contractors: UserObj[]} = { employees : [], contractors: [] };
  resultObj.employees = employeesArr;
  resultObj.contractors = contractorsArr;
  return resultObj;
}
