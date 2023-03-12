import { Input } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  placeholder?: string
}

const Searchbar: FC<Props> = ({ placeholder }: Props) => {
  return <Input w="70%" h="30px" color="white" placeholder={`${placeholder}`} />
}
export { Searchbar }
