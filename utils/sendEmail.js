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
          subject: 'Thank you for contacting us'
        }
      ],
      from: {
        email: 'info_blockfint@blockfint.com',
        name: 'Blockfint'
      },
      content: [
        {
          type: 'text/html',
          value: `<html>
              <head>

                  <title>Blockfint Email Contact</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <style>
                      h1 {
                          font-family: Nunito Sans;
                          font-size: 18px;
                          font-weight: 800;
                          line-height: 1.56;
                          letter-spacing: normal;
                      }
                      .Logo {
                          padding-top: 2.75rem;
                          text-align: center;
                      }
                      img {
                          width: 10rem;
                      }
                      .MainLayout {
                          padding-top: 2rem;
                          text-align: center;
                          max-width: 321px;
                          margin: 0 auto;
                      }
                      .box {
                          margin-top: 1.5rem;
                          box-shadow: 0 0 14px 8px rgba(0, 0, 0, 0.06);
                          width: 321px;
                          height: 312px;
                      }
                      .contents {
                          padding-left: 1.5rem;
                          padding-right: 1.5rem;
                          padding-top: 2rem;
                          padding-bottom: 2rem;
                          text-align: start;
                          max-width: 273px;
                      }
                      .sub-contents {
                          display: flex;
                          margin-top: 0.5rem;
                      }
                      h2 {
                          font-family: Nunito Sans;
                          font-size: 14px;
                          font-weight: 800;
                          margin: 0;
                      }
                      h3 {
                          font-family: Nunito Sans;
                          font-size: 14px;
                          font-weight: 300;
                          margin: 0;
                          margin-left: 0.5rem;
                      }
                  </style>
              </head>
              <body>
                  <div class="emailwrapper">
                      <div class="main">
                          <div class="content">
                              <div class="Logo">

                                  <img src="https://gideon.energy/images/Blockfint-Colored-White.png" alt="images_Logos">

                              </div>
                              <div>
                                  <div class="MainLayout">
                                      <div>
                                          <h1>Thank you for contacting Blockfint!</h1>
                                      </div>
                                      <div class="description">
                                          <span>We’re thrilled to hear from you. We will look over your message and get back to you within 3 working days.
                                          </span>
                                      </div>
                                      <div class="box">
                                          <div class="contents">
                                              <div class="sub-contents">
                                                  <div>
                                                      <h2>Full Name: </h2>
                                                  </div>
                                                  <div>
                                                      <h3>${name}</h3>
                                                  </div>
                                              </div>
                                              <div class="sub-contents">
                                                  <div>
                                                      <h2>Email:</h2>
                                                  </div>
                                                  <div>
                                                      <h3>${email} </h3>
                                                  </div>
                                              </div>
                                              <div class="sub-contents">
                                                  <div>
                                                      <h2>Subject: </h2>
                                                  </div>
                                                  <div>
                                                      <h3>${subject} </h3>
                                                  </div>
                                              </div>
                                              <div class="sub-contents">
                                                  <div>
                                                      <h2>Message:</h2>
                                                  </div>
                                              </div>
                                              <div>
                                                  <h3> <br />${contents} </h3>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
              </body>
              </html>`
        }
      ]
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
