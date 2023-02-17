import React, { ReactNode } from 'react'
import MuiAccordion, { AccordionProps } from '@material-ui/core/Accordion'
import AccordionDetails, {
  AccordionDetailsProps,
} from '@material-ui/core/AccordionDetails'
import AccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { Text } from './text'

const useStyles = makeStyles({
  accordion: {
    '& .MuiAccordionDetails-root': {
      flexDirection: 'column',
      marginTop: '0',
    },
    '& .MuiAccordionSummary-content': {
      margin: '0',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      margin: '0',
    },
    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '48px',
    },
  },
})

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
  const classes = useStyles()

  return (
    <MuiAccordion defaultExpanded className={classes.accordion} {...props}>
      <AccordionSummary {...summaryProps} expandIcon={<ExpandMore />}>
        <Text>{title}</Text>
      </AccordionSummary>
      <AccordionDetails {...detailsProps}>{children}</AccordionDetails>
    </MuiAccordion>
  )
}
