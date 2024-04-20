import React from 'react'

export default function States({ toDoList }) {

    let countList = toDoList.length

  return (
    <div className='stats'>
        <p className='notify'>
            {countList === 0 ? 'You got everything ready to go!' : `You have ${countList} tasks on your list.`}
        </p>
    </div>
  )
}
