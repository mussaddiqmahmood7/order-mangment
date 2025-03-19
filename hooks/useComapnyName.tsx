"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const CompanyName = createContext<{ company: string } | null>(null)

export function CompanyProvider({ children }: { children: ReactNode }) {
    const [company, setCompany] = useState<string>('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const queryCompany = urlParams.get("company");
            const subdomainCompany = window.location.hostname.split(".")[0];
            setCompany(queryCompany || subdomainCompany);
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