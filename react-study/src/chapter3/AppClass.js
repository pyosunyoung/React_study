import React, { Component } from 'react'
import BoxClass from './BoxClass';

export default class AppClass extends Component {

  constructor(props) { // lifecycle 함수, 생성자 : 컴포넌트 실행되자 마자 호출되는 함수
    super(props)
    this.state = { // state에 한번에 저장해서 한번에 결과값을 추출함
      counter2 : 0,
      num:1,
      value:0
    };
    console.log("constructor")
  }

  increase=()=> { // class에선 const 필요 없다 // state에 한번에 저장해서 한번에 결과값을 추출함
    this.setState({counter2:this.state.counter2 + 1, value:this.state.value + 1})
    console.log("increase function", this.state)
  };
  componentDidMount(){
    // api 콜
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state)
  }

  render() {
    console.log("render")
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value}/>}
        
      </div>// this.state가 3보다 작으면 보여주고 커지면 BoxClass가 사라짐
    )
  }
}

// 리액트 life 사이클 면접에서 질문 나올 수 있음.

// 클래스 컴포넌트 :
// lifecycle : 인생 주기, 사람이 태어나서 죽을 때 까지
// mounting: 컴포넌트 시작
// updating : state 업데이트, ui 업데이트
// unmounting : 컴포넌트 종료

// mounting : 
// - 1. constructor : 여기서 state생성, lifectcle함수에서 첫번째로 실행되는 함수임 즉 컴포넌트 실행될 때 constructor실행하고 들어감
// 즉 앱이 실행되자 마자 해줘야 하는 작업들은  constructuer에 넣으면 좋다.
// - 2. render : ui그려주는 함수
// - 3. componentDidMount : ui 세팅이 완료되면 알려주는 함수

// 1.constructor : state를 만든다.
// 2. render : ui를 그려준다.
// 3. componentDidMount : api 콜, ui를 가져오고 api를 가져와야 예를 들어 뉴스정보 가져올떄 
// api ui 둘다 가져와야겠지? 그래서 render가 끝나면 ui를 먼저 가져오겠고 거기에서 
// componentDidmount 호출로 api 입혀서 화면에 표출되어지는 것

// Updationg:

// 1. render : new proprs(새로운 속성 전달), setState()(state업데이트), forceUpdate() (기타 업데이트)시 updating render 일어남
// 2. componentDidUpdate : 이걸 호출하는 이유는 state를 업데이트되면 바로 업데이트되는것이 아니라 비동기적으로 처리됨 
// 즉 기다렸다가 나중에 업데이트되고 랜더링됨, 그래서 state가 업데이트 되었는지 알려주는 함수가 이거임.


//  increase=()=> { 
//     this.setState({counter2:this.state.counter2 + 1, value:this.state.value + 1})
//     console.log("increase function", this.state)
//   };

// render()

// componentDidUpdate() {
//     console.log("componentDidUpdate", this.state)
//   }
// == 결과값
// increase function {counter2: 0, num: 1, value: 0} // 바로 콘솔 찍었을 땐 카운트값 적용 x
// render
// componentDidUpdate {counter2: 1, num: 1, value: 1} // 최신값 업데이트된 state값 가져옴
// 여기선 즉 최신업데이트된 작업들을 여기서 작업하면 됨

// Unmounting:
// 앱 종료
// componentWillUnmount()
