import  { useEffect, useState } from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 800); // simulate loading time
        return () => clearTimeout(timer);
      }, []);
    return[loading]
};

export default useLoading;