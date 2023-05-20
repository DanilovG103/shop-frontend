import React from 'react'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import MuiStepper from '@mui/material/Stepper'

import { RequestStatusType } from 'src/generated'
import { statuses } from 'src/utils'

const statusValues = [
  RequestStatusType.Created,
  RequestStatusType.Fulfilled,
  RequestStatusType.Delivered,
]

interface Props {
  currentStep: RequestStatusType
}

export const Stepper = ({ currentStep }: Props) => {
  const activeStep = statusValues.findIndex((item) => item === currentStep)

  return (
    <MuiStepper activeStep={activeStep + 1}>
      {statusValues.map((label, i) => (
        <Step key={i}>
          <StepLabel>{statuses[label]}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  )
}
