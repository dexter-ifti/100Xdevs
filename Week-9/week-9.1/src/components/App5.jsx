import { useEffect, useState } from 'react'

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
};

function App5() {
    const mousePointer = useMousePointer();

    return (
        <>
            <h2>in this file we are going to create useMousePointer Hook</h2>
            Your mouse position is {mousePointer.x} {mousePointer.y}
        </>
    )
}

export default App5