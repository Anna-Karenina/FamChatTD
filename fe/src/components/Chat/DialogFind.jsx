import React from 'react'
import Select from 'react-select';
import cl from './OneChat/Chat.module.css';

const DialogFind = (props) => {
//const [option, setOption] = useState(props.options);
//const [isLoading, setIsLoading] = useState(false)
//isLoading={isLoading}
const  handleChange = (newValue: any, actionMeta: any) => {
  //вытащить из пропсов функцию для изменения стейта
  //props.экшенИзРедакса(newOption, option)
  };
  return (
    <Select
      className = {cl.cont}
      placeholder ={'Все пользователи'}
      name="DialogFind"
      options ={'тут будут все пользователи'}
      isClearable={true}
      isSearchable={true}
      onChange={handleChange}
    />
  )
}

export default DialogFind




// (el =>el.label=el.name
