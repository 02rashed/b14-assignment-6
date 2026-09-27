'use client';
import React, {useContext} from 'react';
import { CalendarPlus } from 'lucide-react';
import { IExercise } from '@/components/types/exercises.type';
import {ExerciseContext} from '@/context/exerciseContex';
import { toast } from "react-toastify";

const AddButton = ({exercise} :{exercise:IExercise}) => {

    const { addPlan, setPlan } = useContext(ExerciseContext) as {
        addPlan: IExercise[];
        setPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    };

     const isAlreadyAdded = addPlan.some((item) => item.name === exercise.name);

     const handleAddExercise = ( ) => {
         if (isAlreadyAdded) return;
       setPlan([...addPlan, exercise]) ;
        toast.success(` ${exercise.name} Added to your Today's plan`);    }
    return (
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full
         bg-[#c2f800] text-black font-semibold text-sm hover:bg-[#b0e000] 
         cursor-pointer" onClick={()=> handleAddExercise() } disabled={isAlreadyAdded} >
              <CalendarPlus className="w-4 h-4" />
              <span>Add to today&apos;s plan</span>
            </button>
    );
};

export default AddButton;