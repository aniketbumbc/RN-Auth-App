import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  async function loginHandler({ email, password }) {
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message='Logging new user...' />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
