import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    Button,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useContext } from 'react'
import { GlobalStateContext } from '../../Global/GlobalStateContext'


export const ModalPokemon = () => {
const {isOpen, setIsOpen, controlModal}= useContext(GlobalStateContext)
    return (
        <>
               <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
{
    controlModal===1 ? 
      <Flex w={"450px"}
                        h={"220px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}>
                        <Heading>Gotcha!</Heading>
                        <Text fontWeight={"bold"}>O pokemon foi adicionado a sua pokédex!</Text>
                    </Flex> :
                     <Flex w={"450px"}
                        h={"220px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}>
                        <Heading>Oh, no!!</Heading>
                        <Text fontWeight={"bold"}>O pokemon foi removido da sua pokédex!</Text>
                    </Flex>
}
                  
                </ModalContent>
            </Modal>
        </>
    )
}