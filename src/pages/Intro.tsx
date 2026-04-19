import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [isZooming, setIsZooming] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const [flashColor, setFlashColor] = useState('white');

    useEffect(() => {
        // Intro inicial sequence (5s wait as in script.js)
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsFlashing(true);
            setIsShaking(true);

            // Clean up flash and shake after animation duration
            setTimeout(() => {
                setIsFlashing(false);
                setIsShaking(false);
            }, 500);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        if (!isVisible || isExploding) return;

        // 1. Efecto inicial de Luz y Glitch
        setIsFlashing(true);
        setIsGlitching(true);

        // 2. LA EXPLOSIÓN (Ocurre 300ms después del clic)
        setTimeout(() => {
            setIsGlitching(false);
            setIsExploding(true);
            setFlashColor('cyan');
            
            // Reset flash to trigger animation again
            setIsFlashing(false);
            setTimeout(() => setIsFlashing(true), 10);
        }, 300);

        // 3. Limpieza total y navegación (1000ms después del clic)
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    const letters = [
        { char: 'K', rand: -2.5, src: '/K.png' },
        { char: 'H', rand: 1.8, src: '/H.png' },
        { char: 'A', rand: -0.5, src: '/A.png' },
        { char: 'O', rand: 2.2, src: '/O.png' },
        { char: 'S', rand: -1.2, src: '/S.png' },
    ];

    return (
        <div 
            id="intro-container" 
            className={`intro-container ${isShaking ? 'shake-screen' : ''}`}
            onClick={handleClick}
        >
            <div 
                className={`flash ${isFlashing ? 'flash-active' : ''}`} 
                style={{ backgroundColor: flashColor }}
            />
            
            <img 
                src="/Layer cape.png" 
                className={`bg-cape ${isVisible ? 'visible' : ''} ${isZooming ? 'zoom-bg' : ''} ${isGlitching ? 'glitch-out' : ''} ${isExploding ? 'bg-explode' : ''}`}
                alt="background"
            />

            <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
                <img 
                    src="/Logo.png" 
                    className={`intro-logo ${isGlitching ? 'glitch-out' : ''} ${isExploding ? 'explode' : ''}`} 
                    alt="Logo" 
                />
                
                <div 
                    className="interactive-group"
                    onMouseEnter={() => setIsZooming(true)}
                    onMouseLeave={() => setIsZooming(false)}
                >
                    <img 
                        src="/ArribaLetra.png" 
                        className={`extra-decoration up ${isGlitching ? 'glitch-out' : ''} ${isExploding ? 'explode' : ''}`} 
                        alt="Arriba" 
                    />

                    <div className="word-wrapper">
                        {letters.map((l, i) => (
                            <img
                                key={i}
                                src={l.src}
                                className={`letter ${isGlitching ? 'glitch-out' : ''} ${isExploding ? 'explode' : ''}`}
                                style={{ '--rand': l.rand } as React.CSSProperties}
                                alt={l.char}
                            />
                        ))}
                    </div>

                    <img 
                        src="/AbajoLetra.png" 
                        className={`extra-decoration down ${isGlitching ? 'glitch-out' : ''} ${isExploding ? 'explode' : ''}`} 
                        alt="Abajo" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
