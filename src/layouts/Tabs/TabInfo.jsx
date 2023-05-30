import { List, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import TabPanel from './TabPanel'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const TabInfo = (props) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label='Ingredients' {...a11yProps(0)} />
        <Tab label='Instructions' {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <List component='ol'>
          {props.ingredients.map((ingredient, index) => {
            return (
              <li key={index}>{ingredient}</li>
            )
          })}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.instructions}
      </TabPanel>
    </>
  )
}

export default TabInfo