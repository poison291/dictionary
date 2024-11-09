import React from 'react'

export default function Cards({data}) {
  return (
    <>
    <div className='cards-container'>
        <div className="child">
      <h3>Definition: {data.definition}</h3>

        </div>
    </div>
    </>
  )
}
