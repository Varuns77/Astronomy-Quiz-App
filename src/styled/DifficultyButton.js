import styled from 'styled-components'

export const DifficultyButton = styled.div`
    display: block;
    min-width: 220px;
    text-align: center;
    background-color: white;
    border-radius:5px;
    transition: 2s ease-in;
    
    ul {
        list-style-type: none;
    }
    
    ul li:hover{
        background-color: grey;
        transition: 0.4s ease-in;
        color: white;
        border-radius:5px;
        cursor: pointer;
    }
`