require('../src/db/mongoose');
const User = require('../src/models/user');

//promise chaining
// User.findByIdAndUpdate('5ee2543d2d19e75b24b0c0df', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((resultUsers) => {
//     console.log(resultUsers);
// }).catch((e) => {
//     console.log(e);
// });

//using async await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('5ee2543d2d19e75b24b0c0df', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});