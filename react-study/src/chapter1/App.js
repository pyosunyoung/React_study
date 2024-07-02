import { useState } from 'react';
import './App.css';
import Box from './component/Box'

function App() { // 값이 바뀌면 ui도 자동으로 바꾸자 => 그게 state state가 변해야 ui가 변경되어지게 설정
  // 일반 변수는 ui가 안바뀌게 설정됨 state 변수만 바뀜
  //그래서 ui로 보여주는 값은 state로 바꿔야 함
  let count = 0;
  const [counter, setCounter] = useState(0);
  const increase = () => {
    count = count + 1;
    setCounter((a) => a + 1); // 비동기적으로 동작해서 늦게 값이 추출됨, 함수가 끝나야 값이 나옴, 이유는 값이 나오는 시간이 좀 걸려서 이전 값이 추출될 수 있음
    console.log(counter)// 그래서 콘솔 찍으면 0이 나올것, 이 비동기 작업을 해결할 함수가 있는데 그건 다음시간에 알려줌
    // setCounter(a + 1);
    //그래서 state바꾸는 함수가 바로 실행되는게 아니라 setcounter함수가 끝날 때 까지 기다렸다가 state바꾸는 함수들을 모아서 한번에 실행함
    
    console.log(count); // 버튼을 누르면 state를 바꾸는 순간 리랜더링됨 즉 app컴포넌트 다시 그려준다,실행함,
    //처음부터 실행되어서 다시 count를 0으로 초기화 시킴, 
    //하지만 state는 그 전의 값을 기억하기 때문에 상관없음 그래서 count는 변수값이 초기화되어서 0이된것 
    //1. 변수는 rerender 될때마다 초기화된다, 2. state값은 비 동기적으로 처리된다.
  }
  return (
    <div>
      <Box name={'pyo'} number={1}/>
      <Box name={'seon'} number={2}/>
      <Box name={'young'} number={3}/>
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
