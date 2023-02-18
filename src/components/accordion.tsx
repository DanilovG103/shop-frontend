import React, { ReactNode } from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionDetails, {
  AccordionDetailsProps,
} from '@mui/material/AccordionDetails'
import AccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'

import { Text } from './text'

const Details = styled(AccordionDetails)(() => ({
  flexDirection: 'column',
  marginTop: 0,
  paddingTop: 0,
}))

const Summary = styled(AccordionSummary)(() => ({
  minHeight: '36px !important',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 12px',
}))

interface Props extends Omit<AccordionProps, 'children'> {
  children: ReactNode
  title: string
  summaryProps?: AccordionSummaryProps
  detailsProps?: AccordionDetailsProps
}

export const Accordion = ({
  children,
  title,
  summaryProps,
  detailsProps,
  ...props
}: Props) => {
  return (
    <MuiAccordion defaultExpanded {...props}>
      <Summary {...summaryProps} expandIcon={<ExpandMore />}>
        <Text>{title}</Text>
      </Summary>
      <Details {...detailsProps}>{children}</Details>
    </MuiAccordion>
  )
}
