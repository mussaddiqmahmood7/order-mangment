'use client'
import { useCompany } from "@/hooks/useComapnyName";
import { sampleOrders } from "@/constants/orders";
import { DataTable } from "@/components/Table";
import { columns } from "@/components/Column";

import Image from "next/image";
const registerCompanies = ['daraz', 'foodpanda', 'amazon']


export default function Home() {
  const { company } = useCompany() as {company:"daraz" | "amazon" | "foodpanda"}

  if (!registerCompanies.includes(company)) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-red-600">404: Not Found</h1>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold text-black">{company}</span> is not a valid subdomain.
            Please use a valid subdomain.
          </p>
          <p>daraz, amazon, foodpanda</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20 w-full my-10 mx-auto max-w-screen-xl rounded-3xl p-5 bg-gray-50 text-black">
        <Image src={sampleOrders[company].logo} alt={company} className="max-w-24 w-full" />
        <DataTable columns={columns} data={sampleOrders[company].orders}  />
    </div>
  );
}
