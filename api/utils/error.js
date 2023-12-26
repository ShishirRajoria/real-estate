// tis file is used for the errorhandlers which is basically not a error like throwing the limit
//of password or include @in gmail

export const errorhandlers = (statusCode,message)=>{
    const error = new Error();
    error.statusCode= statusCode;
    error.message = message;
    return error;
}