"use client";
import DynamicComponent from "@/components/dynamicComponent";
import FormInterface from "@/interface/FormInterface";
import React, { FormEvent, useEffect, useState } from "react";

import LeaveFormComponent from '@/datas/leaveForm.json'


const Home: React.FC = () => {
  const [formComp, setFormComp] = useState<FormInterface[]>([]);
  const [leaveData, setLeaveData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    // Add fetch to request backend
    setFormComp([...formComp, ...LeaveFormComponent])
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", leaveData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formComp.map((element, index) => {
        return (
          <div>
            <DynamicComponent element={element} index={index} setLeaveData={setLeaveData} />
          </div>
        )
      })}
    </form>
  );
}

export default Home;