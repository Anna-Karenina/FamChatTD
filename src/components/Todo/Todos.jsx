import React from 'react';
import OneTodo from './OneTodo';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import inintalState from  './../Todo/tempstate';


class Columntodos extends React.Component {
  render () {
    return (
      <Droppable droppableId={this.props.column.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {this.props.tasks.map((m, index) =>
              <OneTodo
                index = {index}
                id ={m.id}
                title={m.title}
                interval={m.interval}
                towhomisaddressed={m.towhomisaddressed}
                author={m.author}
                priority={m.priority}
                key = {m.id}
                discription={m.discription} />)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )
      }
    }


class Todos extends React.Component {
    state = inintalState
onDragEnd = result => {
  const {destination, source, draggableId} = result
  if(!destination){
    return;
  }

  if (
    destination.droppableId === source.droppableId && destination.index === source.index
  ) {
      return
    }
  const column = this.state.columns[source.droppableId]

  const newTaskIds = Array.from(column.taskIds)
  newTaskIds.splice(source.index, 1)
  newTaskIds.splice(destination.index, 0, draggableId)

  const newColumn = {
  ...column,
    taskIds: newTaskIds,
    }

  const newState= {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newColumn.id]: newColumn,
    },
  }
  this.setState(newState)
}
render () {
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      {this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

      return <Columntodos key={column.id} column = {column} tasks = {tasks} />
      })}
    </DragDropContext>
)}}

export default Todos
