import { useEffect, useState } from 'react';

function useWindowSize() {
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const checkSize = () => {
            const w = window.innerWidth;
            setIsMobile(w < 768);
            setWidth(w);
        };

        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    return { isMobile, width };
}

export default useWindowSize;
