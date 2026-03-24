import { useUser } from "../features/authentication/useUser";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const { isPending, user } = useUser();

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return children;
}

export default ProtectedRoute;
