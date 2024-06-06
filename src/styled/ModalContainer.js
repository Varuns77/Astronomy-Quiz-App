import styled from 'styled-components'
 
export const ModalContainer = styled.div`
width: 650px;
height: 370px;
min-width: 350px;
min-height: 280px;
background-color: white;
position: absolute;
display: flex;
justify-content: space-between;
border-radius: 10px;
overflow-y: auto;
scrollbar-width: thin;          /* "auto" or "thin" */
scrollbar-color: grey white;   /* scroll thumb and track */ 

.scores{
    flex: 2;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;  
}

table {
  border-collapse: collapse;
  width: 80%;
  margin: 10px 0;
}

th, td {
  padding: 8px;
  text-align: center;
}

th {
  font-weight: bold;
}

.close-btn button{
    background-color: transparent;
    border: none;
    margin-top: 20px;
    margin-right: 10px;
    cursor: pointer;
}

.instructions{
    flex: 2;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
`;