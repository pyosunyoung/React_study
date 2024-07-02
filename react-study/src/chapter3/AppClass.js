import React, { Component } from 'react'
import BoxClass from './BoxClass';

export default class AppClass extends Component {

  constructor(props) { // lifecycle 함수, 생성자 : 컴포넌트 실행되자 마자 호출되는 함수
    super(props)
    this.state = { // state에 한번에 저장해서 한번에 결과값을 추출함
      counter2 : 0,
      num:1,
      value:0
    }
  }

  increase=()=> { // class에선 const 필요 없다 // state에 한번에 저장해서 한번에 결과값을 추출함
    this.setState({counter2:this.state.counter2 + 1, value:this.state.value + 1})
  };

  render() {
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}
