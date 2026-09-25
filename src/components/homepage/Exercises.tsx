import React from "react";
import { Clock3, Flame, Star } from "lucide-react";
import {IExercise} from '../types/exercises.type'
const getExercises = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  return response.json();
};

const Exercises = async () => {
  const exercisesData = await getExercises();

  return (
    <div className="container mx-auto text-white px-45 hover:cursor-pointer">
      <div className=" pt-8 pb-7">
        <h2 className="text-4xl font-bold uppercase">
          The Library
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-10">
        {exercisesData.map((exercise:IExercise) => (
          <div key={exercise.id} className="bg-[#191b20] border border-gray-800 rounded-[18px] overflow-hidden shadow-lg hover:border-[#c2f800]">
            {exercise.image && (
              <div className="relative h-[240px] w-full bg-gray-900">
                <img src={exercise.image} alt={exercise.name} className="w-full h-full object-cover"/>
              </div>
            )}

            <div className="px-6 pt-6 pb-6">
              <div className="flex flex-wrap gap-2 mb-5">
                {exercise.muscleGroups.map((muscle) => (
                  <span key={muscle} className="rounded-full bg-[#c2f800] px-3 py-1 text-[15px] leading-none font-medium text-black">
                    {muscle}
                  </span>
                ))}
              </div>

              <h2 className="text-[24px] leading-none font-bold uppercase tracking-tight mb-5">
                {exercise.name}
              </h2>

              <p className="text-[17px] text-gray-300 mb-5">
                {exercise.equipment}
              </p>
              <div className="flex items-center gap-5 text-[16px] text-gray-100">
                <div className="flex items-center gap-2">
                  <Clock3 size={20} strokeWidth={2} className="text-[#c2f800]"/>
                  <span>{exercise.duration} min</span>
                </div>

                <div className="flex items-center gap-2">
                  <Flame
                    size={20}
                    strokeWidth={2}
                    className="text-[#c2f800]"/>
                  <span>{exercise.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={20} strokeWidth={2} className="text-[#c2f800]"/>
                  <span>{exercise.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;