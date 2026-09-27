'use client';

import React, { useContext } from 'react';
import { ExerciseContext } from '@/context/exerciseContex';

export default function SavedBadge() {
  const { saveLater = [] } = useContext(ExerciseContext);
  
  return (
    <span className="bg-[#c2f800] text-black px-2 py-0.5 rounded-full text-xs font-bold">
      {saveLater.length}
    </span>
  );
}