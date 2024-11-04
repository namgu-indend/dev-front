import { useState } from 'react';

export default function IosPopup({ title, message, onConfirm, onCancel }: any) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onCancel) onCancel();
    };

    const handleConfirm = () => {
        setIsVisible(false);
        if (onConfirm) onConfirm();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-80 max-w-sm rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{message}</p>
                <div className="flex space-x-4">
                    <button onClick={handleClose} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
                        Cancel
                    </button>
                    <button onClick={handleConfirm} className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
