import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'showAll', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

const DropDown = ({ selected, setSelected }) => {
  return (
    <Select
      defaultValue={selected}
      onChange={({value})=>setSelected(value)}
      options={options}
    />
  );
};

export default DropDown;
