export const prerender = false

import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export async function POST({ request }: { request: Request }) {
  try {
    const { name, email, message, subject } = await request.json()

    const response = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL,
      to: import.meta.env.TO_EMAIL,
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: false, error: 'Unknown error occurred' }),
      { status: 500 }
    )
  }
}
