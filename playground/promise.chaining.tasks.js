require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ee1d14d9d549c0aa4c3853c').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('5ee2fc9f7a6c8e01a478792b').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});