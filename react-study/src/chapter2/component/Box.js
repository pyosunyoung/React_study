import React from 'react'
import '../RockPaperScissors.css'
const Box = (props) => {
  // let result;
  // if(props.title === "Computer" &&
  //   props.result !== "tie" &&
  //   props.result !== "" 
  // ){
  //   result = props.result === "win" ? "lose" : "win" // 사용자가 입력한 결과값과 반대가 되어지면 됨, 비길때는 필요 없음
  // } else {
  //   result = props.result
  // }
  return (
    <div className={`box ${props.result}`}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img}/> 
      <h2>{props.result}</h2>
    </div>
    
  )
}
// 유저가 넘겨준 item값이 있으면 item.img출력됨
export default Box
