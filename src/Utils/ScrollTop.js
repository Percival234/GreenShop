import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const path = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
}
