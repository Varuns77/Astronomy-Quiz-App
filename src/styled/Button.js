import styled from 'styled-components'
 
export const Button = styled.button`
    color: black;
    padding: 10px;
    background-color: white;
    border-radius:5px;
    display: block;
    min-width: 220px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s ease-in;

    &:hover{
        background-color: grey;
        /* border: 1px solid black; */
        color: white;
        border-radius:5px;
    }`