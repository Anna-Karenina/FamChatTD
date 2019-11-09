import { helper } from './../../core/index'

const initstate = {
  tasks: {
    'task-1': {
                id : 'task-1',
                title: 'Помыть пол',
                discription: 'нужно вымыть пол в гостинной',
                interval : '2019-10-31T11:45:00.000Z',
                taskAssignee : ["private"],
                author:'Виктория Соколова',
                priority: 'priority1',
                createdAt: '2019-10-09T06:19:02.680+00:00'
                },
    'task-2': {
                id : 'task-2',
                title: 'Выкрасить забор',
                discription: 'нужно выкрасить забор на даче в красный цвет с приминением самых совремненнных технологий',
                interval: '2019-10-29T11:45:00.000Z',
                taskAssignee : ["toall"],
                author:'Человек паук',
                priority: 'priority2',
                createdAt: '2019-10-09T06:19:02.680+00:00'
                },
    'task-3': {
                id : 'task-3',
                title: 'Собрать конструктор',
                discription: 'Используя разные детальки из конструктора собрать что-то интересное, самолетик например',
                interval: '2019-10-29T11:45:00.000Z',
                taskAssignee : ["Виктория С"],
                author:'Человек тапочек',
                priority: 'priority3',
                createdAt: '2019-10-09T06:19:02.680+00:00'
              },
    'task-4': {
                id : 'task-4',
                title: 'выкрасить забор',
                discription: 'нужно выкрасить забор на даче в красный цвет с приминением самых совремненнных технологий',
                interval: '2019-10-29T11:45:00.000Z',
                taskAssignee : ["private" ,'сука'],
                author:'Человек паук',
                priority: 'priority4',
                createdAt: '2019-10-09T06:19:02.680+00:00'
                },
    'task-5': {
                id : 'task-5',
                title: 'Привизите кассовую ленту',
                discription: 'В нашем ахуенном магазине кончилась кассовая лета нужно быстро найти транспортную компанию которая доставит нам ленту прямо из США, есть варианты: самолет, ж/д под океаном и морем',
                interval: '2019-10-29T11:45:00.000Z',
                taskAssignee : ["private" ,'сука'],
                author:'Человек паук',
                priority: 'priority1',
                createdAt: '2019-10-09T06:19:02.680+00:00'
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
      let newpayload = helper(payload)
      return {
          ...state,
            tasks:  {
            ...state.tasks,
             ...newpayload
        },
          columns: {
            ...state.columns,
            ...state.columns['column-1']
              .taskIds.push(...Object.keys(newpayload))
          },
      }

    default:
      return state
  }
}
