import { Box, List, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3, marginRight: '25%', marginLeft: '25%', border: '1px dashed grey', height: 300 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

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