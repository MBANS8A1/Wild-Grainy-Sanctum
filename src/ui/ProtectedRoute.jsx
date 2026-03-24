import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const { isPending, user, isAutheticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAutheticated && !isPending) navigate("/login");
    },
    [isAutheticated, navigate, isPending],
  );

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAutheticated) return children;
}

export default ProtectedRoute;
