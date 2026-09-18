export const euro=(n:number)=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
export const uid=()=>Math.random().toString(36).slice(2,10);
