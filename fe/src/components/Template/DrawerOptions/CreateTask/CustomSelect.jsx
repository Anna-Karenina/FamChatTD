import React from 'react';
import Select from 'react-select';


const CustomSelect = ({users, handleBlur, value,onChange}) => {
  const handleChange = value => {
    console.log(value)
    onChange('taskAssignee', value);
  };
  return (
    <>
      <Select
        placeholder ='Кому? выбрать из списка'
        id="taskAssignee"
        options={users}
        multi={true}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name="taskAssignee"
        isClearable={true}
        isSearchable={true}
        isMulti
      />
    </>
  )
}
export default CustomSelect
