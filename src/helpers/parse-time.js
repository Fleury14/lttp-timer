// @flow
const ParseTime = (milliseconds: number) :string => {
    const totalSecs = Math.floor(milliseconds / 1000);
    const tenths = Math.floor((milliseconds % 1000) / 100);
    let secs = 0;
    let mins = 0;
    let hrs = 0;

    secs = totalSecs % 60;
    mins = Math.floor(totalSecs / 60) % 60;
    hrs = Math.floor(totalSecs / 60 / 60);

    const secString = secs < 10 ? `0${secs}` : secs.toString();
    const minString = mins < 10 && hrs > 0 ? `0${mins}` : mins.toString();
    return hrs > 0 ? `${hrs}:${minString}:${secString}` : `${minString}:${secString}.${tenths}`;
}

export default ParseTime;