import { useState, useRef, useEffect } from 'react';

export default function DraggablePopup({ title, onClose, children }: any) {
    const [isVisible, setIsVisible] = useState(true);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const popupRef = useRef(null);

    const handleMouseDown = (e: any) => {
        setStartY(e.clientY);
        setIsDragging(true);
    };

    const handleMouseMove = (e: any) => {
        if (isDragging) {
            setCurrentY(e.clientY - startY);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            if (currentY > 100) {
                // 드래그 거리 기준
                closePopup();
            } else {
                resetPopupPosition();
            }
            setIsDragging(false);
            setCurrentY(0);
        }
    };

    const handleTouchStart = (e: any) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    };

    const handleTouchMove = (e: any) => {
        if (isDragging) {
            setCurrentY(e.touches[0].clientY - startY);
        }
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            if (currentY > 100) {
                closePopup();
            } else {
                resetPopupPosition();
            }
            setIsDragging(false);
            setCurrentY(0);
        }
    };

    const closePopup = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    const resetPopupPosition = () => {
        if (popupRef.current) {
            popupRef.current.style.transform = 'translateY(0)';
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-end justify-center z-10">
            <div className="fixed h-screen w-full bg-black bg-opacity-50 z-20" onClick={closePopup}></div>
            <div
                ref={popupRef}
                className={`bg-white w-full max-w-md rounded-t-3xl px-6 pb-6 text-center shadow-lg transform transition-transform duration-300 ease-out z-30 ${
                    isDragging ? 'translate-y-' + currentY : 'translate-y-0'
                }`}
                style={{ transform: `translateY(${isDragging ? currentY : 0}px)` }}
            >
                <div
                    className="p-5 mb-3 bg-red-100"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="border border-gray-400 w-1/4 mx-auto"></div>
                </div>

                {/* <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3> */}
                <div className="text-gray-600 mb-4 overflow-y-auto">{children}</div>
                {/* <button onClick={closePopup} className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Close
                </button> */}
            </div>
        </div>
    );
}
