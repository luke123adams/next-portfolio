export const validateString = (data: unknown, maxLength: number) => {

    if (!data || typeof data !== "string" || data.length > maxLength) {
        return false        
    }

    return true
}

export const getErrorMessage = (error: unknown): string => {
    let message: string

    if (error instanceof Error) {
        message = error.message
        ;

    } else if (error && typeof error === 'object' && 'message' in error) {
         
            message = String(error.message);
} else if (typeof error === "string") {
    message = error;
} else {
    message = "unknown error"
}

return message;
}