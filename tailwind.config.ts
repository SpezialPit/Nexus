import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#08090b', panel:'#101216', line:'#202329', muted:'#8b919d', accent:'#c7ff67' }, boxShadow:{glow:'0 0 35px rgba(199,255,103,.08)'} } }, plugins:[] } satisfies Config;
