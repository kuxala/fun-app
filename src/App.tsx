import{ useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5f4e6;
  height: 100vh;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  // width: 200px;
  // height: 48px;
  background: #80ced6;
  color: #fff;
  border-radius: 3px;
  border: 0px;
  padding: 0.375em 1.125em;
  font-size: 1rem;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 700px;
  display: flex;
  margin: 0 auto;
`;

interface ChangedButtonProps {
  top: number;
  left: number;
}

const ChangedButton = styled.button<ChangedButtonProps>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 40px;
  background: transparent; 
  color: black;
  border-radius: 3px;
  border: 0px;
  padding: 0.375em 1.125em;
  
`;

function App() {
  const [show, setShow] = useState(false);
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setRandomX(Math.floor(Math.random() * 50));
    setRandomY(Math.floor(Math.random() * 50));
    setClickCount(prevCount => prevCount + 1);
    
    if (clickCount === 9) {
      setShow(false); 
    }
  };

  return (
    <StyledDiv>
      <StyledButton
        onClick={() => {
          setShow(true);
        }}
      >
        {show ? "TOLD YA" : "DO NOT CLICK"}
      </StyledButton>
      {show ? (
        <>
          <StyledVideo autoPlay>
            <source
              src="https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
              type="video/mp4"
            />
          </StyledVideo>
          <ChangedButton top={randomX} left={randomY} onClick={handleButtonClick}>
            X
          </ChangedButton>
        </>
      ) : null}
    </StyledDiv>
  );
}

export default App;
