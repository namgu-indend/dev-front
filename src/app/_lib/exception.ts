export const ReturnOK = () => {
    return {
        status: 200,
        code: 200,
        msg: '',
    };
};

export const ExceptionError = (msg: any) => {
    return {
        status: 200,
        code: 500,
        msg: msg,
    };
};
