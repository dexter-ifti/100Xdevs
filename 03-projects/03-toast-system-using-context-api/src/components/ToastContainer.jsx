import React from 'react'
import { createPortal } from 'react-dom'
import Toast from './Toast';

function ToastContainer({ toasts, removeToast }) {

    const portalRoot = document.getElementById('toast-root');
    if (!portalRoot) return null;
    return createPortal(
        <div className={`toast-container`}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    removeToast={removeToast}
                />
            ))}
        </div>,
        portalRoot
    )
}

export default ToastContainer