import { useLocation } from 'react-router-dom';

export function useQuizScope() {
  const { pathname } = useLocation();
  const isSecret = pathname.startsWith('/secret');

  return {
    isSecret,
    homePath: isSecret ? '/secret' : '/',
    selectPath: isSecret ? '/secret/test/select' : '/test/select',
    testPath: isSecret ? '/secret/test' : '/test',
  };
}
