import React from 'react';
import OneTodo from './OneTodo';


const Todos = (props) => {
    console.log(props)

  let todosList = Object.values(props.state.tasks).map((m =>
    <OneTodo
      id ={m.id}
      title={m.title}
      interval={m.interval}
      towhomisaddressed={m.towhomisaddressed}
      author={m.author}
      priority={m.priority}
      discription={m.discription} />))
      return <>{todosList}</>
}
export default Todos
