import { useState } from 'react'

const Content = ({ toggle, show }) => {

  const handle = () => {
    toggle(!show)
  }

  return (
    <div style={{ height: 500, width: 500, backgroundColor: 'lightblue' }}>
      <button onClick={handle}>X</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
        doloremque autem exercitationem quis consequuntur expedita odit
        praesentium quos aliquam.
      </p>
    </div>
  )
}

export default Content
