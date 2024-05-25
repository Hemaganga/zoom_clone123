import React, { ReactNode } from 'react'
import  StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BHOOM",
  description: "Video calling app",
  icons:{
    icon: '/icons/logo.svg',
  }
};

const Rootlayout = ({ children }: {children:ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout