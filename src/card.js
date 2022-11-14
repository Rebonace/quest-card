import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;

  box-sizing: border-box;
  margin: 48px auto 0;

  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: #0a0908;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transform: translateY(100px);
  transition: 0.7s;
  z-index: 3;
  position: relative;

  &:hover {
    transform: translateY(0px);
  }
`;

export const CardElementTop = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: #0a0908;
  z-index: 1;

  display: flex;

  transition: 0.7s;
  transform: translateY(25px);

  &:hover {
    transform: translate(0px, 15px);
    transition: 0.7s;
  }
`;

export const CardImg = styled.img`
  height: 270px;
  position: relative;
  margin-left: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 3px;
  border-color: #f7dad9;
  box-shadow: 0px 0px 5px 5px rgba(243, 244, 243, 0.2);
`;

export const CardElementBottom = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fce694;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  transition: 0.8s;
  transform: translateY(-240px);

  &:hover {
    transform: translateY(9px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    bottom: 15px;
    left: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #49111c;
    border-radius: 5px;
  }
`;

export const CardTitle = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 800;
  color: #291711;
`;

export const CardParagraph = styled.p`
  margin: 0.5rem;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space evenly;
  text-align: center;
  color: #291711;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
`;
