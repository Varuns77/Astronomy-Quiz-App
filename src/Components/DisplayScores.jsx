import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { X } from 'lucide-react';
import { ModalContainer } from '../styled/ModalContainer';

function DisplayScores({onClose}) {
    const [savedUserData, setSavedUserData] = useState(null);

    useEffect(() => {
      const keys = Object.keys(localStorage);
      console.log(keys);
      const userDataArray = keys.map((key) => JSON.parse(localStorage.getItem(key)));
      setSavedUserData(userDataArray);
      // console.log(savedUserData ? savedUserData : "");
      // setUserDataList(userDataArray);
      // const userData = localStorage.getItem('userData');

      // const {name, score, level} = userData;
    }, []);
  
    return (
      <ModalContainer>
        <div className="close-btn">
          <div>
            <button onClick={onClose}><X size={20}/></button>
          </div>
        </div>
        <h1 style={{textAlign: "center"}}>Saved Scores</h1>
        
        {savedUserData ? savedUserData && (
          <div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <h3>Name</h3>
              <h3>Difficulty</h3>
              <h3>Score</h3>
            </div>
          {savedUserData.map((userData, index) => (
          <div key={index} style={{display: "flex", justifyContent: "space-around"}}>
            <List>{userData.name}</List>
            <List>{userData.difficultylevel}</List>
            <List>{userData.userscore}</List>
          </div>          
        ))}
      
          
          </div>
        ): " Play the game to view your scores"}
      </ModalContainer>
    );
}

export default DisplayScores

const List = styled.p`
  display: inline;
`;

