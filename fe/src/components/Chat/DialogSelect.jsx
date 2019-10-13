import React from 'react'
import Select from 'react-select';
import cl from './OneChat/Chat.module.css';

const DialogSelect = (props) => {
  props.options.map(i => i.label = i.partner.name)
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
      placeholder ={'Имя чата'}
      name="DialogList"
      options ={props.options}
      isClearable={true}
      isSearchable={true}
      onChange={handleChange}
    />
  )
}

export default DialogSelect




// (el =>el.label=el.name
