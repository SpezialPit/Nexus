'use client';
import * as Icons from 'lucide-react';
export function Icon({name,size=18}:{name:keyof typeof Icons;size?:number}){const C=Icons[name] as React.ComponentType<{size?:number;strokeWidth?:number}>;return C?<C size={size} strokeWidth={1.8}/>:null}
