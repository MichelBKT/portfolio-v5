import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs sont requis'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email invalide'
      })
    }

    // Get Resend API key from environment
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set')
      throw createError({
        statusCode: 500,
        statusMessage: 'Configuration email manquante'
      })
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey)

    // Your email address (where you want to receive contact form messages)
    const recipientEmail = process.env.CONTACT_EMAIL || 'contact@michelbanckaert.fr'

    // Send email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's test domain
      to: [recipientEmail],
      replyTo: email, // Visitor's email for easy reply
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #667eea;
                margin-bottom: 5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid #667eea;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 6px;
                border-left: 3px solid #667eea;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">Nouveau message de contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nom</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📝 Sujet</div>
                <div class="field-value">${subject}</div>
              </div>

              <div class="field">
                <div class="field-label">💬 Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Ce message a été envoyé depuis votre portfolio</p>
              <p style="margin: 5px 0;">Vous pouvez répondre directement à <strong>${email}</strong></p>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}

---
Répondez directement à: ${email}
      `
    })

    return {
      success: true,
      message: 'Email envoyé avec succès',
      data
    }

  } catch (error: any) {
    console.error('Contact form error:', error)

    // Return appropriate error
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi du message'
    })
  }
})