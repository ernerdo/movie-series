import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { FC } from 'react'

const TabsCategories: FC<any> = ({ categories }) => {
  return (
    <Tabs as="nav" mb="5" overflow="scroll hidden">
      <TabList>
        {categories.genres?.map((category: any, i: number) => (
          <Tab key={i} color="#fff">
            {category.name}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export { TabsCategories }
