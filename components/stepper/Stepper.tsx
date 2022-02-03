import React from 'react';

import { StepWizardChildProps } from 'react-step-wizard';


export const Stepper = ({ currentStep }: Partial<StepWizardChildProps>) => {

    return <ul className="stepper">
        <li className={`stepper-step ${currentStep! >= 1 ? "stepper-active " : ""}`}>
            <div className="stepper-head">
                <span className="stepper-head-icon"> 1 </span>
                <span className="stepper-head-text"> step1 </span>
            </div>
        </li>
        <li className={`stepper-step ${(currentStep! === 2 || currentStep! === 3) ? "stepper-active " : ""}`}>
            <div className="stepper-head">
                <span className="stepper-head-icon"> 2 </span>
                <span className="stepper-head-text"> step2 </span>
            </div>
        </li>
        <li className={`stepper-step ${currentStep! === 3 ? "stepper-active " : ""}`}>
            <div className="stepper-head">
                <span className="stepper-head-icon"> 3 </span>
                <span className="stepper-head-text"> step3 </span>
            </div>
        </li>
    </ul>
};
