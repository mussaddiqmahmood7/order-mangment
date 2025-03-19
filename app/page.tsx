'use client'
import { useCompany } from "@/hooks/useComapnyName";

import { sampleOrders } from "@/constants/orders";
import { DataTable } from "@/components/Table";
import { columns } from "@/components/Column";

import foodpanda from "@/assets/foodpandaLogo.png"
import daraz from "@/assets/darazlogo.png"
import amazon from "@/assets/amazonLogo.jpg"
import Image from "next/image";

const registerCompaniesLogo = {daraz:daraz, foodpanda:foodpanda, amazon:amazon}
const registerCompanies = ['daraz', 'foodpanda', 'amazon']


export default function Home() {
  const { company } = useCompany()

  if (!registerCompanies.includes(company)) {
    return <div className="text-center font-semibold py-10">{company} not register yet</div>
  }


  return (
    <div className="flex flex-col gap-20 w-full">
        <Image src={registerCompaniesLogo[company as "daraz" | "amazon" | "foodpanda" ]} alt={company} className="max-w-24 w-full" />
        <DataTable columns={columns} data={sampleOrders[company as "daraz" | "amazon" | "foodpanda"]}  />

    </div>
  );
}
