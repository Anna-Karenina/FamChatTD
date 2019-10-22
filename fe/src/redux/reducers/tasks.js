const initstate = {
  tasks: {
    'task-1': {
                id : 'task-1',
                title: 'Помыть пол',
                discription: 'нужно вымыть пол в гостинной',
                interval : '1.09.1022',
                towhomisaddressed : "private",
                author:'Виктория Соколова',
                priority: 'priority1'
                },
    'task-2': {
                id : 'task-2',
                title: 'Выкрасить забор',
                discription: 'нужно выкрасить забор на даче в красный цвет с приминением самых совремненнных технологий',
                interval: '3.09.2019',
                towhomisaddressed : "toall", author:'Человек паук',
                priority: 'priority2'
                },
    'task-3': {
                id : 'task-3',
                title: 'Собрать конструктор',
                discription: 'Используя разные детальки из конструктора собрать что-то интересное, самолетик например',
                interval: '13.11.2017',
                towhomisaddressed : "toall",
                author:'Человек тапочек',
                priority: 'priority3'
              },
    'task-4': {
                id : 'task-4',
                title: 'выкрасить забор',
                discription: 'нужно выкрасить забор на даче в красный цвет с приминением самых совремненнных технологий',
                interval: '3.09.2019',
                towhomisaddressed : "private",
                author:'Человек паук',
                priority: 'priority4'
                },
    'task-5': {
                id : 'task-5',
                title: 'Привизите кассовую ленту',
                discription: 'В нашем ахуенном магазине кончилась кассовая лета нужно быстро найти транспортную компанию которая доставит нам ленту прямо из США, есть варианты: самолет, ж/д под океаном и морем',
                interval: '3.09.2019',
                towhomisaddressed : "private",
                author:'Человек паук',
                priority: 'priority1'
                },
  },
    columns:{
      'column-1':{
        id: 'column-1',
        title: 'to do',
        taskIds:['task-1','task-2','task-3', 'task-4', 'task-5',]
      },
    },
    columnOrder:['column-1'],
}

export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'TASKS:SET_ITEMS':
      return {
          ...state,
            tasks:  {
            ...state.tasks,
          'task-6': {
                    id : 'task-6' ,
                    title: payload.taskName,
                    discription: payload.taskDiscription,
                    interval : '1.09.1022',
                    towhomisaddressed : 'private',
                    author:'Виктория Соколова',
                    priority: payload.priority

          },
        },
          columns: {
            ...state.columns,
            taskIds :state.columns['column-1'].taskIds.push('task-6')
          },
      }

    default:
      return state
  }
}
