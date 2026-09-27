import React from 'react';
import { IExercise } from '@/components/types/exercises.type';
import Exercises from '@/app/exercises/page';
import Image from 'next/image';
import AddButton from '@/components/exerciseDetails/addButton'
import SaveButton from '@/components/exerciseDetails/saveButton'

interface IExercisePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getExercises = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  return response.json();
};

const DetailsPage = async ({ params }: IExercisePageProps) => {
  const { slug } = await params;
  const exercisesData = await getExercises();

  const exercise = exercisesData.find(
    (exercise: IExercise) => exercise.id === Number(slug)) as IExercise;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-12 text-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#16181e] border border-zinc-800 shadow-2xl">
          <Image src={exercise.image} alt="exercise image" fill className="object-cover" priority />
        </div>
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
              {exercise.name}
            </h1>
            <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
              {exercise.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups.map((group, idx) => (
              <span key={idx} className="px-3.5 py-1 text-xs font-semibold rounded-full bg-[#c2f800] text-black capitalize" >
                {group}
              </span>
            ))}
          </div>
          <div className="bg-[#181a20] rounded-2xl p-4 border border-zinc-800/80 divide-y divide-zinc-800/50">
            {[
              { label: 'EQUIPMENT', value: exercise.equipment },
              { label: 'DIFFICULTY', value: exercise.difficulty },
              { label: 'SETS', value: exercise.sets },
              { label: 'REPS', value: exercise.reps },
              { label: 'DURATION', value: `${exercise.duration} min` },
              { label: 'CALORIES', value: `${exercise.caloriesBurned} kcal` },
              { label: 'RATING', value: exercise.rating },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2.5 px-2 first:pt-1 last:pb-1" >
                <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-zinc-100">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-3 pt-2">
            <h2 className="text-lg font-black uppercase tracking-wide text-white">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-3 text-sm text-zinc-300">
              {exercise.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-2 leading-relaxed">
                  <span className="font-semibold text-zinc-400">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
              <AddButton exercise={exercise} />
            <SaveButton  exercise={exercise} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;