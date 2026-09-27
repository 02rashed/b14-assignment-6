"use client"
import React, { useContext, useState } from 'react';
import { ExerciseContext } from '@/context/exerciseContex';
import Link from 'next/link';
import ExerciseCard from '@/components/exerciseDetails/exerciseCard';
import { IExercise } from '@/components/types/exercises.type';

const AddedExercises = () => {
  const { addPlan = [], saveLater = [], removePlan = () => {} } = useContext(ExerciseContext) as {
    addPlan?: IExercise[];
    saveLater?: IExercise[];
    removePlan?: (exerciseId: string | number) => void;
  };
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Name">("Duration");  
  const rawList = activeTab === 'today' ? addPlan : saveLater;
  const currentList = [...rawList].sort((a, b) => {
    if (sortBy === 'Name') return String(a.name).localeCompare(String(b.name));
    if (sortBy === 'Calories') return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    return (Number(a.duration) || 0) - (Number(b.duration) || 0);
  });

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
  const totalCalories = currentList.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

  return (
    <div className="min-h-screen bg-[#0e0f12] text-white px-4 py-28 flex justify-center">
      <div className="w-full max-w-[1000px] space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="mt-2 text-[#9da3ae] text-sm font-medium">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="bg-[#181a20] rounded-2xl border border-zinc-800/80 
        grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 p-6">
          <div className="flex flex-col gap-2 pb-4 md:pb-0 md:pr-6">
            <span className="text-xs font-semibold text-[#8b919d]">
              Exercises
            </span>
            <span className="text-4xl font-black text-[#c2f800]">
              {totalExercises}
            </span>
          </div>
          <div className="flex flex-col gap-2 py-4 md:py-0 md:px-6">
            <span className="text-xs font-semibold text-[#8b919d]">
              Minutes
            </span>
            <span className="text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>
          <div className="flex flex-col gap-2 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-semibold text-[#8b919d]">
              Calories
            </span>
            <span className="text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="inline-flex items-center bg-[#131418] border border-zinc-800/80 p-1 rounded-xl w-fit">
            <button onClick={() => setActiveTab('today')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors 
            ${activeTab === 'today' ? 'bg-[#181a20] text-[#c2f800] border border-zinc-800/80' : 'text-[#8b919d] hover:text-white'}`}>
              Today&apos;s Plan
            </button>
            <button onClick={() => setActiveTab('saved')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors 
            ${activeTab === 'saved' ? 'bg-[#181a20] text-[#c2f800] border border-zinc-800/80' : 'text-[#8b919d] hover:text-white'}`}>
              Saved
            </button>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1">
            <label className="text-xs font-bold text-white tracking-wide">
              Sort By
            </label>
            <div className="relative min-w-[200px]">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Name")}
                className="w-full bg-[#131418] text-white text-xs font-medium px-4 py-2.5 
                rounded-xl border border-zinc-800 appearance-none cursor-pointer pr-10 focus:outline-none focus:border-zinc-700">
                <option value={"Duration"}>Duration</option>
                <option value={"Calories"}>Calories</option>
                <option value={"Name"}>Name</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {currentList.length > 0 ? (
          <div className="space-y-4">
            {currentList.map((exercise: IExercise, index: number) => (
              <ExerciseCard key={`${exercise.id}-${index}`} exercise={exercise} onRemove={removePlan}/>
            ))}
          </div>
        ) : (
          <div className="bg-[#181a20] border border-zinc-800/80 rounded-2xl py-16 px-6 flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-black uppercase tracking-wider text-white">
              {activeTab === 'today' ? "NO EXERCISES IN TODAY'S PLAN" : 'NO SAVED EXERCISES FOUND'}
            </h2>
            <p className="mt-2 text-xs text-[#8b919d] max-w-sm font-medium leading-relaxed">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href="/exercises" className="mt-6 px-6 py-3 rounded-full bg-[#c2f800] text-black font-extrabold text-xs tracking-wide hover:bg-[#b0e000] transition-colors inline-block">
              Go to workouts
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default AddedExercises;