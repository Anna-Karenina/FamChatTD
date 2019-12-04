import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import  ruLocale  from 'date-fns/locale/ru'

export default   (isoDate) =>{
  let date = parseISO(isoDate)
  return  format(new Date(date), 'dd MMMM yyyy в HH:m',{ locale: ruLocale})
}
