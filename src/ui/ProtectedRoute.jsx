import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const { isPending, user } = useUser();
  return children;
}

export default ProtectedRoute;
