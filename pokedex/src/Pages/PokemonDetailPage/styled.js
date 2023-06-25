import styled from "styled-components";

export const MainDetailContainer = styled.main `
background-color: #5d5d5d;
height: 80vh;
display: flex;
justify-content: center;

`
export const PokeInfosContainer = styled.div`
height: 80vh;
width: 90vw;
margin: 20 px 10vw;
display: flex;
justify-content: space-evenly;
background-color: ${(props) => props.colorType};
border-radius: 10px;
position: relative;
`;

export const ImagesContainer = styled.div`
align-self: center;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`;

export const ImgWrapper = styled.img`
height: 30vh;
background: #f1f1f1;
border-radius: 10px;
margin-bottom: 10px;

`;

export const StatsContainer = styled.div`
background: #f1f1f1;
align-self: center;
height: 75vh;
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-left: 20px;
z-index: 1;
border-radius: 10px;
`;

export const TitleContainer = styled.h2`
align-self: center;
`;

export const TypeAndMoveContainer = styled.div`
align-self: center;
height: 75vh;
width: 300px;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 1;

`;

export const TypeContainer = styled.div`
height: 10%;
display: flex;
flex-direction: column;
justify-content: space-between;
color: white;
`;

export const MovesContainer = styled.div`
background: #f1f1f1;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-left: 20px;
margin-top: 68px;
border-radius: 10px;
p{
    background-color: #ececec;
    max-width: 40%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 1px dashed rgba(0, 0 ,0, 0.14);
    padding-left: 5px;

}

`;
export const TypeImg = styled.img`
width: 89px;
height: 30px;
margin: 3px;

`;

export const PokeImg = styled.img`
height: 193px;
position: absolute;
top: -60px;
right:-15px;

`;

export const PokeBallImg = styled.img`
position: absolute;
height: 100%;
width: 48%;
top: 0px;
right: 0px;
z-index: 0;
`;

//Progress bar
export const ProgressContainer = styled.div`
height: 70%;
section {
  display: grid;
grid-template-columns: 2fr 1fr 3fr;
}
`;

export const DivProgress = styled.div`
width: 100%;
height: 10px;
`;

export const ProgressBar = styled.div`
height: 10px;
background-color: #ff7c2e;
width: ${(props) => props.widthBar}%;
border-radius: 10px;

`;
export const PStatsName = styled.p`
display: flex;
justify-content: end;
`;
export const PStatsNumber = styled.p`
display: flex;
justify-content: center;
`;