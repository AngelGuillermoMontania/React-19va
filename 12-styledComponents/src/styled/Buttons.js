import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    if (props.$color === "primary") {
      return "#22FF22";
    } else if (props.$color === "secondary") {
      return "#FF22FF";
    } else {
      return "#FFFFFF";
    }
  }};
  border: 5px solid white;
  font-size: 32px;
`;

export const ButtonError = styled(Button)`
  background-color: red;
`;
