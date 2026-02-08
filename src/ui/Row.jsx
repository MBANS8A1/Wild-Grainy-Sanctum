import styled, { css } from "styled-components";

const defaultDirection = {
  vertical: css`
    flex-direction: column;
    gap: 1.6rem;
  `,
};

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  ${(props) => (props.type ? props.type : defaultDirection["vertical"])}
`;

// Row.defaultProps = {
//   type: "vertical",
// };
export default Row;
