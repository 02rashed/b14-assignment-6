"use client";
import React, { createContext, ReactNode, useState } from 'react';

export const ExerciseContext = createContext<any>({});

const ExercisesContext = ({ children }: { children: ReactNode }) => {
  const [addPlan, setPlan] = useState<any[]>([]);
  const [saveLater, setLater] = useState<any[]>([]);

  // Correct function signature
  const removePlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    setLater((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ExerciseContext.Provider value={{ addPlan, setPlan, saveLater, setLater, removePlan }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExercisesContext;