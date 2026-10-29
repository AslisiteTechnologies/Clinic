import {isBefore,startOfDay} from 'date-fns';
import {z} from 'zod';
import type {Appointment} from './store';

export const bookingSchema=z.object({name:z.string().min(2,'Please enter a demo name (fictional only).'),email:z.string().email('Enter a valid email for this demo.')});
export const isFutureDate=(date:string,today=new Date()):boolean=>{const target=new Date(`${date}T12:00:00`);return !Number.isNaN(target.valueOf())&&!isBefore(startOfDay(target),startOfDay(today))};
export const isDoctorAvailable=(days:number[],date:string):boolean=>days.includes(new Date(`${date}T12:00:00`).getDay());
export const hasAppointmentConflict=(appointments:Appointment[],doctorId:string,date:string,time:string,ignoreId?:string):boolean=>appointments.some(a=>a.id!==ignoreId&&a.status==='Booked'&&a.doctorId===doctorId&&a.date===date&&a.time===time);
