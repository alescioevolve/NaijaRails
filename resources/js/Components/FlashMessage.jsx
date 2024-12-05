import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const FlashMessage = () => {
    const { flash } = usePage().props;
    const [isVisible, setIsVisible] = useState(!!flash.message);
    const [shouldRender, setShouldRender] = useState(!!flash.message);

    useEffect(() => {
        if (flash.message) {
            setIsVisible(true);
            setShouldRender(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    setShouldRender(false);
                }, 300);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [flash.message]);

    if (!shouldRender) return null;

    return (
        <div
            className={`
        right-20 
        absolute 
        alert 
        bg-green-500 
        p-4 
        drop-shadow-md 
        text-white 
        text-sm 
        rounded-lg
        transition-all 
        duration-300
        transform
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
      `}
        >
            {flash.message}
        </div>
    );
};

export default FlashMessage;
