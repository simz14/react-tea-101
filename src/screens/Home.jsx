import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #aff379;
  width: 700px;
  border-radius: 25px;
  padding: 20px;
`;

const TeaViedo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  left: 0;
`;

const CheckBtn = styled.button`
  width: 20%;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <TeaViedo className="videoTag" autoPlay loop muted>
        <source
          src={
            "https://videos.pond5.com/beauty-shot-tea-plantation-footage-051072420_main_xxl.mp4"
          }
          type="video/mp4"
        />
      </TeaViedo>
      <h1>Delicous</h1>
      <h1>Delights</h1>
      <CheckBtn>Check 'em out</CheckBtn>
    </HomeWrapper>
  );
};

export default Home;
