import React from 'react' // rafce 단축키 입력하면 기본 구조 생성됨

const Box = ({name, number}) => {
  return (
    <div className="box">
      Box{number}
      <p>{name}</p>
    </div>
  )
}

export default Box
