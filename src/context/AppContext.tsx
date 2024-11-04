'use client';
import { createContext, useState, useContext } from 'react';
import React from 'react';
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    let [state, setState] = useState({ open_aside: true, nav_id: 0, loading: false, marks: [] });
    return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    try {
        if (useContext == null) {
            return useState({ open_aside: true, nav_id: 0, loading: false, marks: [] });
        }
        if (useContext) {
            return useContext(AppContext);
        } else {
            return useState({ open_aside: true, nav_id: 0, loading: false, marks: [] });
        }
    } catch (e) {
        console.error(e);
        return useState({ open_aside: true, nav_id: 0, loading: false, marks: [] });
    }
}
