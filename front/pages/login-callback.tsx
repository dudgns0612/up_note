import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoginCallback = () => {
  const router = useRouter();
  const { successYn, token, userNo } = router.query;

  useEffect(() => {
    if (successYn === 'Y') {
      localStorage.setItem('token', String(token));
      localStorage.setItem('userNo', String(userNo));

      router.push('/');
    }
  }, [router, successYn, token, userNo]);

  return null;
};

export default LoginCallback;
