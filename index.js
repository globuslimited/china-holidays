import data2018 from "./data/2018.json"
import data2019 from "./data/2019.json"
import data2020 from "./data/2020.json"
import data2021 from "./data/2021.json"

const data = data2018.concat(data2019).concat(data2020).concat(data2021);

export const getHoliday = (day = new Date(), holidays = data) => {
    return holidays.find(({range}) => {
        const start = new Date(range[0])
        const end = new Date(range[1] ?? range[0])
        return day >= start && day <= end;
    });
}

export const isHoliday = (day, holidays = data) => {
    const holiday = getHoliday(day, holidays);
    return holiday != null && holiday.type === 'holiday'
}

export const isWorkReplacement = (day, holidays = data) => {
    const holiday = getHoliday(day, holidays);
    return holiday != null && holiday.type === 'workingday'
}

export default {
    isHoliday,
    isWorkReplacement,
    getHoliday
}
