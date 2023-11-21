import LoginWrapper from './LoginWrapper';

type LoginProps = object;

export type LoginForm = {
  username: string;
  password: string;
};

const Login: React.FC<LoginProps> = () => {
  return <LoginWrapper />;
};

export default Login;
