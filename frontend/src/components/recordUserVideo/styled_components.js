import styled from 'styled-components';
import { Header, Nav, Panel } from 'rsuite';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InstructionBtn = styled.div`
    display: flex;
    background-color: white;
    height: 55px;
    width: 337px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 28px;
    align-items: center;
    justify-content: center;
`;
export const IntructionTextBtn = styled.p`
    display: flex;
    font-size: 30;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center;
    `;

export const RowOnTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 3%;
    margin-top: 10vh
    `;

export const VideoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4
    `;

export const ScriptBlockDiv = styled(Panel)`
    display: flex;
    flex: 4
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 3%;
    margin: 10px
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 852px;
    height: 188px;
    justify-content: center;
    align-items: center
`;

export const ScriptBlock = styled(Panel)`
    display: flex;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center
`;

export const ScriptBlockNextBtn = styled.div`
    display: flex;
    border-style: solid;
    border-color: #1592E6;
    border-width: 1px;
    border-radius: 23px;
    width: 373px;
    height: 65px;
    background-color: #1592E6;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const ScriptBlockNextBtnText = styled.p`
    align-self: center;
    font-family: Arial;
    font-weight: bold;
    font-size: 30px;
    color: white;
    justify-content: center
`;

export const NextBtnDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    padding: 10px;
    flex: 5;
    
`;

export const SquareDiv = styled.div`
    position: absolute;
    border: 5px solid red;
    top: 9%;
    left: 15.33%;
    width: 70%;
    height: 76%;
`;

export const StyledNavItem = styled(Nav.Item)`
    color: #FFF;
`;

export const StyledHero = styled.div`
    height: 20vh;
    background-image: linear-gradient(135deg, #168af0 0%, #764ba2 100%);
    color: #fff;
    padding-top: 4rem;
    `;

export const Title = styled.h1`
    font-family: 'Dosis', sans-serif;
    font-size: 2.57813rem;
    margin-bottom: .5rem;
`;
    