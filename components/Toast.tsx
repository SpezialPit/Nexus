'use client';
import {AnimatePresence,motion} from 'framer-motion';
export function Toast({message}:{message:string}){return <AnimatePresence>{message&&<motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}} className="fixed bottom-5 right-5 z-[60] rounded-xl border border-[#35402a] bg-[#11160d] px-4 py-3 text-sm shadow-xl">{message} ✓</motion.div>}</AnimatePresence>}
