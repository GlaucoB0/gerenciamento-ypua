const formatZodError = (error: any) => {
    const formatedError = {
        
    }

    error.issues.forEach((err: any) => {
        const path = err.path[0]
        if(!formatedError[path]){
            formatedError[path] = []
        }
        formatedError[path].push(err.message);
    })

    return formatedError;
}

export default formatZodError;