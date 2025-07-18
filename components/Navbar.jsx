import React from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Cv from '@/components/preview/cv';
import { convertToPDF } from '@/lib/downloadResume.js';
import Link from 'next/link';

const Navbar = ({ general, experience, education, skills, projects }) => {
  return (
    <div
      className={
        'bg-sidebar-accent flex justify-between lg:justify-between items-center px-4 py-3 lg:px-8 lg:py-3 border-b-2 sticky'
      }
    >
      <h1 className={'text-md lg:text-2xl flex items-center gap-4 font-mono'}>
        <Link href={'https://github.com/KARDT89/CV-application'} target="blank">
          PlaceHolder
        </Link>
      </h1>
      <Drawer>
        <DrawerTrigger className={'block xl:hidden'}>
          <AlignJustify />
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex justify-end gap-2 px-4 py-2">
            <ModeToggle />
            <Button onClick={() => convertToPDF('mobile-resume')}>
              Download CV
            </Button>
          </div>
          <div
            className={
              'flex-1 flex justify-center md:items-center px-4 overflow-y-scroll'
            }
          >
            <div id="mobile-resume">
              <Cv
                general={general}
                experience={experience}
                projects={projects}
                education={education}
                skills={skills}
              />
            </div>
          </div>

          <DrawerFooter
            className={'flex flex-col items-center justify-between'}
          >
            <DrawerTitle className={'flex items-center gap-4'}>
              <Image
                className={'hidden dark:block'}
                src={'/odin-lined.png'}
                width={'30'}
                height={'10'}
                alt={'odin'}
              />
              The Odin Project | CV Application
            </DrawerTitle>
            <DrawerDescription>
              Made with ❤️ by <span className={'font-dt89'}>DT89</span>
            </DrawerDescription>
            <DrawerClose className={'flex gap-2'}></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className={'hidden xl:flex xl:gap-2'}>
        <Button variant="outline" onClick={() => convertToPDF('resume')}>
          Download CV
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
