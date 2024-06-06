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
    }, []);
  
    return (
      <ModalContainer>
      <div className='scores'>
        <h1 style={{ textAlign: "center" }}>Saved Scores</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {savedUserData && savedUserData.length > 0 ? (
              savedUserData.map((score, index) => (
                <tr key={index}>
                  <td>{score.name}</td>
                  <td>{score.difficultylevel}</td>
                  <td>{score.userscore}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>Play the game to view your scores</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="close-btn">
        <button onClick={onClose}><X size={20} /></button>
      </div>
    </ModalContainer>
    );
}

export default DisplayScores

