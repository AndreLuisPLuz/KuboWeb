import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ContainerA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 300px; 
  height: 200px; 
  overflow: hidden; 
  
  position: absolute;
  z-index: 2;

  left: 60%;
  top: 160px;
`;

const CustomizerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  height: 100vh;
  
`;

const MascoteContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const CustomizerContainerPersonalize = styled.div`
  background-color: #0e1844;
  height: 100%;
  width: 40%;
  padding: 30px;

  overflow: auto;
`;

const MascotPreview = styled.div<{ backgroundColor: string }>`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 20px;
  border-radius: 30px;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const ColorOption = styled.div<{ isSelected: boolean; color: string }>`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  
  cursor: pointer;
  background-color: ${({ color }) => color};
  border: 2px solid ${({ isSelected }) => (isSelected ? "#ffffff" : "transparent")};
  transition: border 0.2s;
`;

const EyeOption = styled.div<{ isSelected: boolean }>`
  background-color: aliceblue;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 3px solid ${({ isSelected }) => (isSelected ? "#65baff" : "transparent")};
  transition: border 0.2s;

  img {
    width: 100%;
    height: 100%;
    
  }
`;

const AccessoryOption = styled.div<{ isSelected: boolean }>`
  background-color: aliceblue;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 3px solid ${({ isSelected }) => (isSelected ? "#65baff" : "transparent")};
  transition: border 0.2s;

  img {
    width: 100%;
    height: 100%;
  }
`;

const H1 = styled.h1`
  color: aliceblue;
`

const Button = styled.button`
  width: 180px;
  font-size: 1rem;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: #0e1844;
  color: #ffffff;
  cursor: pointer;
  &:hover {
      background-color: #00608d;
  }
  margin-top:100px ;
`


export {ContainerA, Button, ImageContainer, Container, MascoteContainer, H1, AccessoryOption, EyeOption , ColorOption, OptionsContainer, MascotPreview, CustomizerContainer, CustomizerContainerPersonalize }
