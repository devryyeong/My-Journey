//For Card animation
import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            //offsetHeight: 패딩, 스크롤 바, border가 포함된 요소의 높이. margin 제외.
            const offsetHeight = window.document.getElementById(id).offsetHeight;
            
            //console.log('windowPageOffset', window.pageYOffset, offsetHeight);
            if (window.pageYOffset > offsetHeight * 0.5) {
                setAnimation(true);
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);

    return animation;
}