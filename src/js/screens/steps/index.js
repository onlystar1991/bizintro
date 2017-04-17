import React, { Component, PropTypes } from 'react'
import { FirstStep } from './first-step'
import { SecondStep } from './second-step'
import { ThirdStep } from './third-step'
import { ForthStep } from './forth-step'

const steps = 
    [
      {name: 'StepOne', component: <FirstStep />},
      {name: 'StepTwo', component: <SecondStep />},
      {name: 'StepThree', component: <ThirdStep />},
      {name: 'StepFour', component: <ForthStep />}
    ]

export { steps }