import React, { memo } from 'react'

const Memo = () => {
    console.log("re-render")
  return (
    <div>Memo</div>
  )
}

export default memo(Memo)