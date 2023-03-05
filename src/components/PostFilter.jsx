import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div style={{alignSelf: 'start' }}>
        <MyInput
          placeholder={"Search"}
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <MySelect
          defaultValue="Sort by"
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By desc'}
          ]}
        />
    </div>
  )
}
