import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
export const metadata:Metadata={title:'NEXUS — Personal Life Dashboard',description:'Private personal command center'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
