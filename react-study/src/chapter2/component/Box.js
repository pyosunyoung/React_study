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
  // let result = 0;
  // if(props.title === "You" && props.result !== "tie" && props.result !== "") {
  //   result = props.result === "win" ? result + 1 :
  //   console.log(result)
    
  // } else {
    
  // }

  // if(result === 3) {
  //   Swal.fire({
  //     title: "이겼습니다!",
  //     text: "스코어 ",
  //     icon: "success",
  //     timer: 1500,
      
  //   });
  // } else {
  //   Swal.fire({
  //     title: "졌습니다ㅠㅠ!",
  //     text: "다음문제로 넘어가세요!",
  //     icon: "error",
  //     timer: 1500,
      
  //   });
  // }
  return (
    <div className={`box ${props.result}`}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} alt=''/> 
      <h2>{props.result}</h2>
    </div>
    
  )
}
// 유저가 넘겨준 item값이 있으면 item.img출력됨
export default Box
