"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const CompanyName = createContext<{ company: string } | null>(null)

export function CompanyProvider({ children }: { children: ReactNode }) {
    const [company, setCompany] = useState<string>('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            const _company = window.location.hostname.split(".")[0];
            if (company !== _company && _company) {
                setCompany(_company)
            }
          }
      
    }, [])

    return <CompanyName.Provider value={{ company }}>
        {children}
    </CompanyName.Provider>
}

export function useCompany() {
    const context = useContext(CompanyName)

    if (!context) {
        throw new Error("Context not found")
    }

    return context
}