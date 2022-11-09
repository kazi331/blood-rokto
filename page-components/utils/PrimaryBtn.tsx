import React from 'react'

type Props = {
  bg?: string,
  color?: string,
  children: React.ReactNode,
  className?: string
}

const PrimaryBtn = (props: Props) => {
  const { bg, color, className, children } = props;
  return (
    <div className={className}>
      <button type='button'
        style={{ color: color, background: bg }}
        className='bg-primary text-white text-xl py-2 px-6 '>
        {children}
      </button>
    </div>
  )
}

export default PrimaryBtn