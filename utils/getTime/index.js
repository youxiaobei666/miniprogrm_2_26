const date = new Date()
const newDay = date.toLocaleDateString() 
const arr1 = newDay.split('')
arr1.splice(4,1,'-')
arr1.splice(6,1,'-') 
const toDay = arr1.join('')// yyyy-mm-dd
export  {toDay}