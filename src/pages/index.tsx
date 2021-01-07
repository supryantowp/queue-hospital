import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import AddAntrianDrawer from '@/component/add-antrian-drawer'
import siteConfig from '~/site-config'

const Index = () => (
  <Box d='grid' placeItems='center' minH='100vh'>
    <Stack spacing={4} align='start'>
      <Heading
        bgGradient='linear(to-l, #7928CA,#FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        {siteConfig.title}
      </Heading>
      <Text>{siteConfig.description}</Text>
      <Flex>
        <AddAntrianDrawer />
        <NextLink href='/antrian'>List Antrian</NextLink>
      </Flex>
    </Stack>
  </Box>
)

export default Index
