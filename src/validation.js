export const requiredValidation = (value) => {
    return value ? true : false;
}

export const reservartionEndValidation = (value, allFields) => {
    if(value){
        const timeLimit  = (new Date(value).getTime() - new Date(allFields.reservation_start_time).getTime()) < 10800000;
        return new Date(value).getTime() > new Date(allFields.reservation_start_time).getTime() && timeLimit;
    }
    return false;
}