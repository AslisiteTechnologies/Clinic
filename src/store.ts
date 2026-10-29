import {create} from 'zustand';
export type Appointment={id:string;reference:string;name:string;email:string;doctorId:string;specialty:string;date:string;time:string;type:string;fee:number;status:'Booked'|'Cancelled'};
type State={appointments:Appointment[];add:(a:Appointment)=>void;update:(id:string,patch:Partial<Appointment>)=>void};
const read=():Appointment[]=>{try{return JSON.parse(localStorage.getItem('saanjh-appointments')||'[]') as Appointment[]}catch{return[]}};
export const useAppointments=create<State>((set)=>({appointments:read(),add:(a)=>set((s)=>{const appointments=[...s.appointments,a];localStorage.setItem('saanjh-appointments',JSON.stringify(appointments));return{appointments}}),update:(id,p)=>set((s)=>{const appointments=s.appointments.map(a=>a.id===id?{...a,...p}:a);localStorage.setItem('saanjh-appointments',JSON.stringify(appointments));return{appointments}})}));
