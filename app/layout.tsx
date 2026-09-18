import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'NEXUS — Personal Life Dashboard',description:'Private personal command center'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
