import dayjs from "dayjs";

function calculateBio(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'day');
    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBios(birthDate, targetDate) {
    return {
        date:targetDate,
        physical: calculateBio(birthDate, targetDate, 23),
        emotional: calculateBio(birthDate, targetDate, 28),
        intellectual: calculateBio(birthDate, targetDate, 33)
    };
}

export function calculateBioSeries(birthDate,startDate,size){
    const series=[];
    const startDay=dayjs(startDate).startOf('day');
    for (let index = 0; index < size; index++) {
        const targetDate = startDay.add(index,'days').toISOString();
        series.push(calculateBios(birthDate,targetDate));
    }
    return series;
}