import React from 'react';
import OneTodo from './OneTodo';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { tasksActions } from "./../../redux/actions/index";


const Columntodos = (props) => {
  console.log(props)
    return (
      <Droppable droppableId={props.column.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {props.tasks.map((m, index) =>
              <OneTodo
                index = {index}
                id ={m.id}
                title={m.title}
                interval={m.interval}
                taskAssignee={m.taskAssignee}
                author={m.author}
                priority={m.priority}
                key = {m.id}
                createdAt = {m.createdAt}
                access = {props.access}
                discription={m.discription} />)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )
    }


class Tasks extends React.Component {
  state = this.props
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
          {this.props.tasks===undefined ?
            <div>Активных задач нет</div>
            :
          this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

          return <Columntodos key={column.id} column = {column} tasks = {tasks} access={this.props.access} />
          })}
        </DragDropContext>
    )}}

    const mapStateToProps = (state) =>{
    return{
      ...state.tasks,
      access: state.user.data.hierarchy
      }
    }

export default connect(
  mapStateToProps,
  (tasksActions)
)(Tasks);
