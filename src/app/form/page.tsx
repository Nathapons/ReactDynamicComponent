"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

import FormInterface from '@/interface/FormInterface';
import DynamicComponent from '@/components/dynamicComponent';
import AntdLayout from "@/components/antdLayout";


export const page: React.FC = () => {
  const searchParams = useSearchParams()
  const [formComp, setFormComp] = useState<FormInterface[]>([]);
  const [leaveData, setLeaveData] = useState<{ [key: string]: any }>({});

  const getLeaveFormData = async (tenantIdNumber: number) => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/form/${tenantIdNumber}`).then(
      (response) => {
        setFormComp(response.data)
      }
    ).catch(
      (error) => {
        console.error('Error fetching leave form data:', error)
      }
    )
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const tenantId = searchParams.get('tenantId');
    const tenantIdNumber = tenantId ? parseInt(tenantId) : 1;

    getLeaveFormData(tenantIdNumber);
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", leaveData);
  }

  return (
    <AntdLayout>
      <form onSubmit={handleSubmit}>
        {formComp.map((element, index) => {
          return (
            <div key={index}>
              <DynamicComponent element={element} index={index} setLeaveData={setLeaveData} />
            </div>
          )
        })}
      </form>
    </AntdLayout>
  );
}

export default page;