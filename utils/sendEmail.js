import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

// const SENDGRID_API_KEY = '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' //myEmailBlockfint
// const SENDGRID_API_KEY = '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'  Gideon
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY //blockfint

const sendEmailCustomer = async (info) => {
  const name = info.name
  const email = info.email
  const subject = info.subject
  const contents = info.contents
  const admin = info.admin

  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: 'Thank you for contacting us',
          dynamic_template_data: {
            customer: [
              {
                name: `${name}`,
                email: `${email}`,
                subject: `${subject}`,
                message: `${contents}`
              }
            ]
          }
        }
      ],
      from: {
        email: 'info_blockfint@blockfint.com',
        name: 'Blockfint'
      },
      template_id: 'd-530790e22d35493695428ee76df49611'
    })
  })
}

const sendEmailAdmin = async (info) => {
  const name = info.name
  const email = info.email
  const subject = info.subject
  const phone = info.phone
  const company = info.company
  const service = info.service
  const business = info.business
  const contents = info.contents
  // const adminEmail = 'lifeistogive@gmail.com'

  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'info_blockfint@blockfint.com'
            }
          ],
          subject: 'admin'
        }
      ],
      from: {
        email: 'info_blockfint@blockfint.com',
        name: 'admin success'
      },
      content: [
        {
          type: 'text/html',
          value: `<p>name:${name}<br/>email:${email}<br/>subjecy:${subject}<br/>phone:${phone}<br/>company: ${company}<br/>service:${service}<br/>business:${business}<br/>contents:${contents}<br/></p>`
        }
      ]
    })
  })
}
export { sendEmailCustomer, sendEmailAdmin }
