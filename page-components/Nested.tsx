import React from 'react'

const Nested = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>TOp item</p>
      {children}
      <p>Bottom Items</p>
    </div>
  )
}

export default Nested