import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'

const AddAntrianDrawer = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen} mr={4}>
        Ambil Antrian
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Ambil antrian baru
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='nama'>Nama</FormLabel>
                  <Input
                    ref={firstField}
                    id='nama'
                    placeholder='Harap masukan nama'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='alamat'>Alamat</FormLabel>
                  <Input id='alamat' placeholder='Harap masukan alamat' />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Batal
              </Button>
              <Button colorScheme='blue'>Simpan</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default AddAntrianDrawer
