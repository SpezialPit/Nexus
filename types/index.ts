export type Section = 'dashboard'|'finance'|'vault'|'shopping'|'notes'|'settings';
export interface User { name:string; email:string; avatar:string }
export interface MonthlyFinancialData { month:string; income:number; fixedExpenses:number; variableExpenses:number; extraordinary:number; plannedSavings:number; actualSavings:number }
export interface FinancialPlan { year:number; months:MonthlyFinancialData[]; annualGoal:number }
export interface SavingsGoal { id:string; name:string; target:number; saved:number; color:string; completed:boolean }
export interface PasswordEntry { id:string; name:string; url:string; username:string; password:string; category:string; notes:string }
export interface Store { id:string; name:string; url:string; category:string; description:string; favorite:boolean; latest:string; lastReviewed:string }
export interface StoreUpdate { id:string; store:string; title:string; time:string; unread:boolean }
export interface Note { id:string; title:string; content:string; tags:string[]; pinned:boolean; updatedAt:string }
export interface Notification { id:string; text:string; time:string; read:boolean; type:string }
