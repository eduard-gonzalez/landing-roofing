import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <Button
                variant="icon"
                className="fixed bottom-6 right-6 z-50"
                onClick={scrollToTop}
            >
                <ArrowUpCircle className="w-8 h-8" />
            </Button>
        )
    );
};

export default ScrollToTopButton;