import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export const Category = () => {
  return (
    <Select options={options} className='-z-10'/>
  )
}
