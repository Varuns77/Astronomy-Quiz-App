import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { X } from 'lucide-react';
import { ModalContainer } from '../styled/ModalContainer';

function Instructions({onCancel}) {
  return (
    <ModalContainer>
        <div className="close-btn">
            <div>
                <button onClick={onCancel}><X size={20}/></button>
            </div>
        </div>
        <h1>Instructions</h1>
        <p><b>Gameplay:</b> Pick your difficulty level. <br />
        Answer questions within the set time. <br />
        Aim to score as high as possible.</p>
        {/* <p><b>Choose Difficulty:</b> Start by selecting Easy, Medium, or Hard mode.</p> */}
        <p><b> Time Limits(entire game):</b> 
            <br />Easy: 30 seconds
            <br />Medium: 45 seconds
            <br />Hard: 60 seconds
            </p>
            <p><b>Scoring:</b> Score 3 points for every correct answer.<br />
            Score 5 points for every correct answer.<br />
            Score 10 points for every correct answer.</p>
            <p><b>Ending the Game:</b> 
            If the timer runs out: Game ends immediately.<br />
            Complete all questions: Game ends, revealing your final score.<br />
        </p>
        

    </ModalContainer>
  )
}

export default Instructions