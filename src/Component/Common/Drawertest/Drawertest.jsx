import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Drawertest = ({setModal,modal}) => {
  return (
    <div className='modal'>
    <Drawer
    size={300}
    
    open={modal}
    onClose={setModal}
    direction='right'
    duration={3000}
    className='bla bla bla'
    overlayOpacity={0.5}
    overlayColor="grey"
    lockBackgroundScroll={true}
>
    <div>Hello World</div>
    </Drawer>
</div>
  )
}

export default Drawertest