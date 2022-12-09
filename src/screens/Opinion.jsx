import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WomenCollecting from "../assets/women_collecting_tea.webp";
import { BsFillPersonFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const OpinionContentWrapp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const InteractWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2/4;
  padding: 30px;
`;
const WomenCollectingImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  left: 0;
`;

const Title = styled.h1`
  padding: 0;
  margin-bottom: 20px;
`;

const InputsWrapper = styled.div`
  display: grid;
  margin-top: auto;
`;

const NameInputWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const NameInput = styled.input`
  padding: 10px 10px 10px 25px;
`;

const OpinionInput = styled.textarea`
  height: 100px;
`;

const PersonIcon = styled(BsFillPersonFill)`
  width: 1.5rem;
  left: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const NavButtonsWrap = styled.div`
  display: flex;
  margin-top: auto;
`;

const ButtonToHome = styled.button`
  margin: 30px;
  width: 200px;
`;

const ButtonToOpinion = styled.button`
  margin: 30px;
  width: 200px;
`;

const Opinion = () => {
  return (
    <OpinionContentWrapp>
      <div>
        <WomenCollectingImage src={WomenCollecting} alt="colletcing tea" />
      </div>

      <InteractWrap>
        <InputsWrapper>
          <Title>Leave your opinion🤔</Title>

          <label name="name">Name</label>
          <NameInputWrap>
            <PersonIcon />
            <NameInput
              name="Name"
              type="text"
              id="name"
              placeholder="Type here..."
            />
          </NameInputWrap>

          <label name="opinion">Opinion</label>
          <OpinionInput
            type="text"
            name="opinion"
            id="opinion"
            placeholder="Type here..."
          ></OpinionInput>

          <button>
            Submit <RiSendPlaneFill />
          </button>
        </InputsWrapper>

        <NavButtonsWrap>
          <NavLink to="/">
            <ButtonToHome>Home</ButtonToHome>
          </NavLink>
          <NavLink to="/teas">
            <ButtonToOpinion>Teas</ButtonToOpinion>
          </NavLink>
        </NavButtonsWrap>
      </InteractWrap>
    </OpinionContentWrapp>
  );
};
export default Opinion;
