const MONTHS='mounts';
const DAYS='days';
const YEARS='years';

export function addInterval(date,n,unit){
  const newDate= new Date(date.getTime())
  switch (unit) {
      case DAYS:
          newDate.setDate(newDate.getDate()+ n)
          break;
      case MONTHS:
          newDate.setMonth(newDate.getMonth()+ n)
          break;
      case YEARS:
          newDate.setFullYear(newDate.getFullYear()+ n)
          break;
  }
   return newDate
}
const today=new Date();
const future= addInterval(today, 5, MONTHS)
console.log(today)
console.log(future)