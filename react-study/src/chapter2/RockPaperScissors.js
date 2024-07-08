import React, { useEffect, useState } from 'react'
import Box from './component/Box'
import './RockPaperScissors.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// 1.박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리색 바뀜 (이기면 초록, 지면 빨강, 비기면 검정)
const choice = {
  rock : {
    name : "Rock",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhujHlj3BzI6kFkCN6F814jl-ixirOVLb8Q&s"
  },
  scissors : {
    name : "Scissors",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-S9fVPSeA28SJexVubODPSkYPbaGlHh_Y2g&s"
  },
  paper : {
    name : "Paper",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T-QEB7PfNnFmRcCOpwn1FntAuQ0Yt9FXqw&s"
  },
}
const RockPaperScissors = () => {
  const [userSelect, setUserSelect] = useState(null); //처음값이 null이라면 에러가 생김(처음 랜더링 값이 null이라서) 그래서 box.js에서 src={item && item.img} 이렇게 변경해야 함 즉 유저가 넘겨준 item값이 있으면 item.img출력됨
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  // const play = (userChoice) => {
  //   console.log("선택됨!", userChoice); 
  //   // play("paper") 이렇게 하면 버튼을 안눌렀는데 모든 scissors rock paper 값이 출력됨 랜더링할 때 
  //   // play("paper")이건 함수를 실행시키라는 뜻이여서 () => play("paper") 이렇게 콜백함수로 바꿔줘야 함
  //   setUserSelect(() => choice[userChoice]);
  //   let computerChoic = randomChoic()
  //   setComputerSelect(computerChoic);
  //   setResult(judgement(choice[userChoice], computerChoic))
    
    
  // }
  const play = (userChoice) => {
    const userSelection = choice[userChoice];
    const computerChoic = randomChoic();
    const gameResult = judgement(userSelection, computerChoic);

    setUserSelect(userSelection);
    setComputerSelect(computerChoic);
    setResult(gameResult);

    if (gameResult === "win") {
      setUserScore((Score) => Score + 1);
    } else if (gameResult === "lose") {
      setComputerScore((Score) => Score + 1);
    }
  };
  
  useEffect(() => {
    checkWinner(userScore, computerScore)
  }, [userScore, computerScore]);
  

  const judgement = (user, computer) => {
    console.log("user", user, "compuer", computer);
    if(user.name === computer.name) {
      return "tie" // 비김
    } else if(user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
      else if(user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
      else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };
  

  const randomChoic = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 함수 [rock, scissors, paper] 이렇게
    let randomItem = Math.floor(Math.random() * itemArray.length); // 랜덤 번호 추출
    let final = itemArray[randomItem]; //[rock, scissors, paper] 에서 하나 랜덤 반환
    return choice[final];
  }

  const checkWinner = (userScore, computerScore) => {
    if(userScore === 3) {
      Swal.fire({
        title: "승리!",
        text: "축하합니다! 승리하셨습니다.",
        icon: "success",
        timer: 1500,
        didClose: resetGame
      });
    } else if(computerScore === 3) {
      Swal.fire({
        title: "패배ㅠㅠ",
        text: "컴퓨터가 승리하였습니다.",
        icon: "error",
        timer: 1500,
        didClose: resetGame
      });
    }
  }
  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
  }

  return (
    <div>
      <header>
        Rock-Paper-Scissors ✌✊✋
      </header>
      <div className='score'>
        
        <p>You: {userScore}</p>
        <h1>score</h1>
        <p>Computer: {computerScore}</p>
        
      </div>
      
    <div className='main'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result && (result === 'win' ? 'lose' : result === 'lose' ? 'win' : 'tie')}/>
    </div>
    <div className='main'>
    <div className='Previous_page'>
        <Link to={'/'} className='Previous-btn'>Previous page</Link>
      </div>
      <button onClick={() => play("scissors")}>✌</button>
      <button onClick={() => play("rock")}>✊</button>
      <button onClick={() => play("paper")}>✋</button>
    </div>
    
    </div>
  )
}

export default RockPaperScissors
