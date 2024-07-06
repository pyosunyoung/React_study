import React, { useEffect, useState } from 'react'

const FunctionComponent = () => {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value+2);
    console.log("counter는", counter, "counter2 state는", counter2)
    
  };

  useEffect(()=> {
    console.log("useEffect1 Firee")
  }, [])
  useEffect(()=>{
    console.log("useEffect2 Firee", counter2, value)
  }, [counter2, value]);

  useEffect(() => {
    console.log("다른내용 하고 싶어요", value)
  }, [value])

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  )
}
// 1.render 실행 후 2. "useEffect1 Firee" 표출

export default FunctionComponent

// 함수 컴포넌트에선 lifesycle이 없고 그대신 useEffect가 대체자로  쓰임

// 함수 컴포넌트 : 
// useEffect는 :componentDidMount 대체자, render 후에 나옴
// api 호출 작업을 useEffect가 함

// useEffect
//  useEffect(()=>{
//     console.log("useEffect2 Firee")
//   }, [counter2]);
// 위 코드처럼 
// counter2의 state가 업데이트 될 때 마다 render하고 이 함수를 실행시킨다.
// 즉 useEffect 배열안에 값이 들어가면 componentDidupdate를 커버하는 느낌
// 위에 처럼 componentDidupdate는 최신값 업데이트된 state값 가져옴 그래서 여기서 최신값을 작업하면 됨



// array에는 여러개 들어갈 수 있음
// useEffect(()=>{
//     console.log("useEffect2 Firee", counter2, value)
//   }, [counter2, value]);
// 이런식으로 그리고 배열안에 state값이 하나라도 변하면 useEffect가 호출됨 예로 value값만 변하고 couter2값은 안변해도 함수 실행됨
// 배열안에 여러개의 state가 들어있다면 배열 안에 state중 하나라도 업데이트가 되면 해당 useEffect가 호출됨 
// 하지만 여러개의 state가 동시에 업데이트 되었다 해도 한번만 호출됨
// 하지만 value는 독립적으로 다른 작업을 해주고 싶다 그럴떈 그냥 useEffect 하나 더 생성하면 됨

// 정리하면 배열에 아무것도 없으면 componentDidMount()처럼 작동
// 배열 안에 state가 있으면  componentDidMount() + componentDidupdate() 처럼 작동됨

