"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    
    const message = formData.get('senderMessage')
    const senderEmail = formData.get('senderEmail')

    if (!validateString(senderEmail, 500)) {
        return {
            error: "invalid email"
        }
    }

    if (!validateString(message, 5000)) {

        return {
            error: "invalid message"
        }

    }
    
    try {
        await resend.emails.send({
            from: "Contact form <onboarding@resend.dev>",
            to: 'lxa207@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string
        })
    } catch(error: unknown) {

        return {
            error: getErrorMessage(error)
        }

    }
}