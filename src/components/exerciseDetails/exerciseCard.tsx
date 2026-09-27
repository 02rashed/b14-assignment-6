import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import { IExercise } from '@/components/types/exercises.type';

interface ExerciseCardProps {
  exercise: IExercise;
  onRemove?: (id: number) => void;
  onMarkAsDone?: (id: number) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  onRemove,
  onMarkAsDone,
}) => {
  return (
    <div className="w-full bg-[#181a20] border border-zinc-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-900">
          <Image src={exercise.image} alt={exercise.name} fill className="object-cover" unoptimized />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black uppercase tracking-wide text-white leading-tight">
            {exercise.name}
          </h3>
          <p className="text-xs text-[#8b919d] font-medium capitalize">
            {exercise.equipment}, {exercise.muscleGroups?.[0] || 'Bench'}
          </p>
          <div className="flex items-center gap-3 pt-1 text-xs font-medium">
            <div className="flex items-center gap-1 text-white">
              <Clock className="w-3.5 h-3.5 text-[#c2f800]" />
              <span>{exercise.duration} min</span>
            </div>
            <div className="flex items-center gap-1 text-white">
              <Flame className="w-3.5 h-3.5 text-[#c2f800]" />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1 text-white">
              <Star className="w-3.5 h-3.5 text-[#c2f800]" />
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 self-end sm:self-center">
        <Link href={`/exercises/${exercise.id}`} className="px-4 py-2 rounded-full border
         border-zinc-700 bg-transparent text-white text-xs font-bold hover:bg-zinc-800 transition-colors" >
          View Details
        </Link>
        <button
          onClick={() => onMarkAsDone?.(exercise.id)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#c2f800] text-black text-xs font-bold hover:bg-[#b0e000] transition-colors"
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Mark as Done</span>
        </button>
        <button onClick={() => onRemove?.(exercise.id)}
          className="text-zinc-400 hover:text-white p-1 transition-colors ml-1" aria-label="Remove exercise" >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;