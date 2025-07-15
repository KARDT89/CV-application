import React from 'react'
import {ModeToggle} from "@/components/ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={'bg-sidebar-accent flex justify-between items-center px-8 py-3 border-b-2'}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <h1 className={'text-2xl flex items-center gap-4'}><Image className={'hidden dark:block'} src={"/odin-lined.png"} width={'30'} height={'10'} alt={'odin'}/>The Odin Project | CV Application</h1>
        <ModeToggle/>
    </div>
  )
}

export default Navbar