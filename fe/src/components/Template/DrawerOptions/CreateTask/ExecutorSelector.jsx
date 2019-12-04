import * as React from 'react';
import Select from 'react-select';


const ExecutorSelect = ({users, handleBlur, value,onChange, disabl}) => {
  const handleChange = value => {
    onChange('taskAssignee', value);
  };
  return (
    <>
      <Select
        isDisabled ={disabl}
        placeholder ='Кому? выбрать из списка'
        id="taskAssignee"
        options={users}
        multi
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name="taskAssignee"
        isClearable
        isSearchable
        isMulti
      />
    </>
  )
}
export { ExecutorSelect }
