import React, { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'

import { ProfileSection } from 'src/types'

import { Box } from '../box'
import { Text } from '../text'

interface Props {
  selectionSection: ProfileSection
  setSelectedSection: Dispatch<SetStateAction<ProfileSection>>
}

const SECTIONS = [
  { value: ProfileSection.REQUESTS, title: 'Мои заказы' },
  {
    value: ProfileSection.DATA,
    title: 'Мои данные',
  },
]

const Wrapper = styled(Box)`
  display: flex;
  gap: 16px;
  width: 100%;
`

const Toggler = styled(Box)`
  cursor: pointer;
  display: flex;
  position: relative;
  transition: 0.2s color ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`

export const ProfileAside = ({
  selectionSection,
  setSelectedSection,
}: Props) => {
  return (
    <Wrapper
      maxWidth={{ xs: '230px', md: '200px' }}
      as="aside"
      flexDirection={{ xs: 'row', md: 'column' }}>
      {SECTIONS.map((item) => {
        const isSelected = selectionSection === item.value

        return (
          <Toggler
            key={item.value}
            width="100%"
            flexDirection={{ xs: 'column', md: 'row' }}
            onClick={() => setSelectedSection(item.value)}>
            {isSelected && (
              <Box
                bg="delimiter_dark"
                height="100%"
                width="2px"
                position="absolute"
              />
            )}
            <Text ml="8px">{item.title}</Text>
          </Toggler>
        )
      })}
    </Wrapper>
  )
}
