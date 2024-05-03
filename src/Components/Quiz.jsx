import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
import { data } from "../assets/Data";
import {MediumData} from "../assets/MediumData"
import Timer from "./Timer";
import DisplayScores from "./DisplayScores";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Quiz({difficulty, home}) {

  const gameLevels = {
    Easy: data,
    Medium: MediumData,
    // Hard: HardData,
  };
  
  const Gamelvl = gameLevels[difficulty];



  // console.log(Gamelvl);

  let [index, setIndex] = useState(5)
  const [question, setQuestion] = useState(Gamelvl[index])
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  let [result, setResult] = useState(false)
  const [userData, setUserData] = useState([]);
  const [showScores, setShowScores] = useState(false);

  // const handleNameChange = (event) => {
  //   const newName = event.target.value;
  //   const newScore = score;
  //   const newDifficulty = difficulty;

  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     name: newName,
  //     userscore: newScore,
  //     difficultylevel: newDifficulty
  //   }));

  //   const userDataObject = {
  //     name: newName,
  //     userscore: newScore,
  //     difficultylevel: newDifficulty
  //   };
  //   localStorage.setItem('userData', JSON.stringify(userDataObject));
  // };

  const handleNameChange = (event) => {

    const newName = event.target.value;
    const newScore = score;
    const newDifficulty = difficulty;

    // const newUser = {
    //   name: newName,
    //   userscore: newScore,
    //   difficultylevel: newDifficulty
    // };

  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     name: newName,
  //     userscore: newScore,
  //     difficultylevel: newDifficulty
  //   }));

  //   const userDataObject = {
  //     name: newName,
  //     userscore: newScore,
  //     difficultylevel: newDifficulty
  //   };
    // localStorage.setItem('userData', JSON.stringify(newUser));

    setUserData(prevUserData => ({
      ...prevUserData,
      name: newName,
      userscore: newScore,
      difficultylevel: newDifficulty
    }));
  };

  const handleSaveScore = () => {
    // Save user data to localStorage
    const randomId = Math.random().toString(36).substring(2,10);

    localStorage.setItem(randomId, JSON.stringify(userData));
    alert('Score saved successfully!');
  };

  console.log(score);

  let Option1 = useRef(null)
  let Option2 = useRef(null)
  let Option3 = useRef(null)
  let Option4 = useRef(null)

  //using this array, we will highlight the correct option when we click on the wrong ans
  const opt_arr = [Option1,Option2,Option3, Option4];
  // console.log(opt_arr)

  // console.log(difficulty);

  

  const checkAns= (e, ans) => {
    if(lock === false){
      if(question.ans === ans){
        e.target.classList.add("correct")
        setLock(true)
        if(difficulty === 'Easy')
          setScore(prev=> prev + 3);
        else if(difficulty === 'Medium'){
          setScore(prev=> prev + 5);
        }
      }
      else{
        e.target.classList.add("wrong")
        setLock(true)
        opt_arr[question.ans - 1].current.classList.add("correct")
      }
    }
  }

  // console.log(question.ans);

  const next = () => {
    if(lock == true){
      if(index === Gamelvl.length - 1)
      {
        setResult(true)
        return 0;
      }
      setIndex(++index)
      setQuestion(Gamelvl[index])
      setLock(false)
      opt_arr.map((option) => {
        option.current.classList.remove("wrong")
        option.current.classList.remove("correct")
        return null
      })
    }
  }

  const reset = () => {
    setIndex(0)
    setLock(false)
    setQuestion(Gamelvl[0])
    setScore(0)
    setResult(false)
    // setUserData({
    //   name: '',
    //   score: 0,
    //   difficultylevel: difficulty,
    // });
  }

  const handleShowScores = () => {
    setShowScores(true); // Set showScores to true when the button is clicked
  };

// Save user data to localStorage whenever userData changes
  // useEffect(() => {
  //   localStorage.setItem('userData', JSON.stringify(userData));
  // }, [userData]);


  

  return (
   
    <GamePlayContainer>
        {result ? <>
        <div className="result-section">
        
        <label>
        Enter your name:
        <input
          type="text"
          value={userData.name}
          onChange={handleNameChange}
        />
      </label>
          <p>Difficulty Level: <b>{difficulty}</b></p>
          <p>You Scored: <b>{score}</b></p>
          <Button className="reset-btn" onClick={handleSaveScore}>Save your score</Button>
          
          {/* <Button className="reset-btn" onClick={handleShowScores}>Show Saved Scores</Button>
          {showScores && <DisplayScores />} */}
          <Button className="reset-btn" onClick={reset}>Reset</Button>
        </div>
        
        </> : <>
        
      <Timer difficultLvl={difficulty}/>
        <div className="top-section">
        <div className="ques-section">
          <p>Questions</p>
          <p>{index+1}/{Gamelvl.length}</p>
        </div>
        <div className="score-section">
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
      <div className="ques-ans-section">
        <hr />
        <p>{question.ques}</p>
        <ul>
          <li ref={Option1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <Button className="next-btn" onClick={next}>Next</Button>
      </div>  </>}      
    </GamePlayContainer>
   
  );
}

export default Quiz;

// const Main = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: red;
//   width: 100vw;
// `;

const GamePlayContainer = styled.div`
  color: black;
  font-size: 1.5em;
  background-color: rgba(255, 255, 255, 0.932);
  min-height: 640px;
  max-width: 800px;
  /* border: 1px solid black; */
  border-radius: 15px;
  margin: 0 auto;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* word-wrap:break-word; */
  margin-top: 60px;

  

  .top-section {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  .ques-section {
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
  }

  .score-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
  }

  .ques-ans-section hr{
    height: 2px;
    max-width: 70%;
    margin: 0 auto;
    border: none;
    background-color: #707070;
  }

  .ques-ans-section p{
    text-align: center;
    margin: 20px;
    font-weight: 700;
  }

  .ques-ans-section ul li{
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    max-width: 70%;
    height: 50px;
    padding-left: 15px;
    border: 1px solid #686868;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 20px;
    /* margin-left: 20px; */

  }

  .next-btn{
    min-width: 120px;
    color: white;
    background-color: black;
    margin: auto;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s background ease-in;
  }

  .next-btn:hover{
    background-color: grey;
        border: 1px solid black;
        color: white;
  }

  .ques-ans-section .correct{
    background: #dffff2;
    border-color: #00d397;
  }

  .ques-ans-section .wrong{
    background: #ffebeb;
    border-color: #ff4a4a;
  }

  .result-section{
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }

  .reset-btn{
    min-width: 120px;
    margin-top: 20px;
    background-color: black;
    color: white;
  }

  .timer-wrapper {
  display: flex;
  justify-content: center;

  padding-top: 15px;
  }

  /* .timer {
  display: flex;
  flex-direction: column;
  align-items: center; 
}*/
`;
