import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return <button onClick={() => login()}>Login</button>;
};

export default Login;
