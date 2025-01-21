import styled from 'styled-components';
/*gym_frontend- app name */
 export const Container = styled.div`
 background-color: #1e1e1e;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 678px;
 max-width: 100%;
 min-height: 400px;
 `;

 export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;
 

 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;
 
 export const Form = styled.form`
 background-color: #2a2a2a;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;
 
 export const Title = styled.h1`
 font-weight: bold;
  margin: 0;
  color: #00ffcc; /* Neon cyan */
  text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
 `;
 export const Input = styled.input`
  background-color: #1e1e1e; /* Dark background */
  border: 1px solid #00ffcc; /* Neon cyan border */
  color: #fff;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.8); /* Neon glow */
  outline: none;
  &::placeholder {
    color: #ccc; /* Lighter text for placeholder */
  }
`;

 

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff007f; /* Neon pink */
  background-color: #ff007f; /* Neon pink */
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(255, 0, 127, 0.75); /* Neon glow */
  &:hover {
    background-color: #00cccc; /* Slightly lighter, but still muted cyan */
    box-shadow: 0 6px 20px rgba(0, 204, 204, 1); /* Lighter glow */
   
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

 export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;
 
 export const Anchor = styled.a`
 color:  #00ffcc; 
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 &:hover {
   color: #ff80ff; /* Lighter neon pink on hover */
 }
`;
 export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => (props.signinIn !== true ? `transform: translateX(-100%);` : null)}
`;
export const Overlay = styled.div`
  background: linear-gradient(to right, #a15aff, #00ffcc); /* Neon pink to cyan */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

 
 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  color: #fff;
  ${props => (props.signinIn !== true ? `transform: translateX(0);` : null)}
  h1 {
    color: #000000;; /* Neon pink for text */
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  color: #fff;
  ${props => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
  h1 {
    color: #000000;; 
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #000000; /* Light gray text */
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Subtle glow */
`;
