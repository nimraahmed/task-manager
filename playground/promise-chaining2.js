require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("640c51eca5575a12e9cb84df")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("640c5c47de1c2494147a50c4")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
