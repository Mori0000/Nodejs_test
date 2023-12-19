import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Path = () => {
  const router = useRouter()
  const path = router.query.path
  return (
    <Box>
      <Text>{path}</Text>
    </Box>
  )
}

export default Path