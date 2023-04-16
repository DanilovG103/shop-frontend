import React, { useState } from 'react'
import { Box } from '@mui/system'

import { Layout, MyRequests, ProfileAside, ProfileData } from 'src/components'
import { ProfileSection } from 'src/types'

const component = {
  [ProfileSection.REQUESTS]: MyRequests,
  [ProfileSection.DATA]: ProfileData,
}

export default function MePage() {
  const [selectedSection, setSelectedSection] = useState(
    ProfileSection.REQUESTS,
  )

  const Component = component[selectedSection]

  return (
    <Layout title="Мой профиль" withAside={false}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
        <ProfileAside
          selectionSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Box width="100%" mt={{ xs: '20px', md: '0' }}>
          <Component />
        </Box>
      </Box>
    </Layout>
  )
}
