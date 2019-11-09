const converter = (payload) => {
console.log('тут converter' , payload)
  payload =  Object.fromEntries(
  payload.map(i => [i._id, {
    id : i._id ,
     title: i.taskName,
     discription: i.taskDiscription,
     interval : i.datepickerinline,
     taskAssignee : i.taskAssignee.map(it =>it.name),
     author: i.taskCreator.name,
     priority: i.taskPriority,
     createdAt: i.createdAt
  }])
)
return payload
}
export default converter
