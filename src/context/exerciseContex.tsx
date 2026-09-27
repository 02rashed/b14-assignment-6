"use client";
import React, { createContext, ReactNode, useState } from 'react';

type Exercise = {
  id: number | string;
  [key: string]: unknown;
};

type ExerciseContextValue = {
  addPlan: Exercise[];
  setPlan: React.Dispatch<React.SetStateAction<Exercise[]>>;
  saveLater: Exercise[];
  setLater: React.Dispatch<React.SetStateAction<Exercise[]>>;
  removePlan: (id: number | string) => void;
};

export const ExerciseContext = createContext<ExerciseContextValue>({
  addPlan: [],
  setPlan: () => undefined,
  saveLater: [],
  setLater: () => undefined,
  removePlan: () => undefined,
});

const ExercisesContex = ({ children }: { children: ReactNode }) => {
  const [addPlan, setPlan] = useState<Exercise[]>([]);
  const [saveLater, setLater] = useState<Exercise[]>([]);

  const removePlan = (id: number | string) => {
    setPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    setLater((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const sharedData = {
    addPlan,
    setPlan,
    saveLater,
    setLater,
    removePlan,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExercisesContex;