import { useEffect } from 'react'

function useScrolltoTop() {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
}

export default useScrolltoTop