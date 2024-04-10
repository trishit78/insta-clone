import React from 'react' 

import Home from './Home'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import CreatePost from './CreatePost'
import Search from './Search'
function SidebarItems() {
  return (
    <>
      <Home/>
      <Search />
      <CreatePost />
      <Notifications/>
      <ProfileLink />
    </>
  )
}

export default SidebarItems
