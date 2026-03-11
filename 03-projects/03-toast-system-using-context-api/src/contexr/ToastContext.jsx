import { useCallback, useMemo } from "react";
import { useState } from "react";
import ToastContainer from "../components/ToastContainer";
import { createContext } from "react";
import { v4 as uuid} from 'uuid';


export const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const removeToasts = useCallback((id) => {

        setToasts(prev => 
            prev.map(t => 
                t.id === id ? { ...t, isClosing: true} : t
            )
        );
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 300)
    }, []);


    const showToast = useCallback((message, type='info') => {
        const id =  uuid();
        const newToast = {
            id,
            message, 
            type,
            isClosing : false
        }
        setToasts(prev =>{ 
            const updated = [...prev, newToast]
            return updated.slice(-3);
        });

        setTimeout(()=> {
            removeToasts(id);
        }, 3000)
    }, [removeToasts]);

    const value = useMemo(() => ({
        showToast,
    }), [showToast]);

    
    return <ToastContext.Provider value={value}>
        {children}
        <ToastContainer 
        toasts={toasts}
        removeToast={removeToasts} 
        />
    </ToastContext.Provider>
}
