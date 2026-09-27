'use client';
import React, {useContext} from 'react';
import { Bookmark } from 'lucide-react';
import { IExercise } from '@/components/types/exercises.type';
import {ExerciseContext} from '@/context/exerciseContex';
import { toast } from "react-toastify";

const SaveButton = ({exercise} :{exercise:IExercise}) => {

    const {saveLater, setLater} = useContext(ExerciseContext) as unknown as {
        saveLater: IExercise[];
        setLater: React.Dispatch<React.SetStateAction<IExercise[]>>;
    };

    const handleSaveExercise = ( ) => {
       setLater([...saveLater, exercise]) ;
       toast.info(`${exercise.name} Saved for Later`)
    }
    return (
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-transparent text-white font-medium text-sm hover:bg-zinc-800 transition-colors
        cursor-pointer" onClick={()=> handleSaveExercise()} >
              <Bookmark className="w-4 h-4" />
              <span>Save for later</span>
            </button>
    );
};

export default SaveButton;