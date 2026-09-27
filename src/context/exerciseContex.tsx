"use client";
import React , {createContext,ReactNode ,useState} from 'react';


export const ExerciseContext = createContext({});

const ExercisesContex = ({ children} : {children:ReactNode}) => {
    const[addPlan, setPlan] = useState([]);
    const [saveLater, setLater] = useState([]);

    const sharedData = {
        addPlan, setPlan, saveLater, setLater
    }
    return <ExerciseContext.Provider value={sharedData}>
        { children }
    </ExerciseContext.Provider>
};

export default ExercisesContex;