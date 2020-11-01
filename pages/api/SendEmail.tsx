import aws from 'aws-sdk'
aws.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION
})

// aws.config.credentials.accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID
// aws.config.credentials.secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
// aws.config.region = process.env.NEXT_PUBLIC_REGION

// Create an Email function
function Email(to, sub, content) {
  const ses = new aws.SES()
  const CustomerSubject = 'Thanks for your contact.'
  const from = 'dev@blockfint.com'
  // 'dev@blockfint.com' // The email address added here must be verified in Amazon SES
  //Amazon SES email format
  try {
    ses.sendEmail(
      {
        Source: from,
        Destination: { ToAddresses: to },
        Message: {
          Subject: {
            Data: CustomerSubject
          },
          Body: {
            Html: {
              Data: `<html>
            <head>
                <title>Your New Token</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <style>
                    h1 { color:#f00;
                    font-size:18px; }
                </style>
            </head>
            <body>
            <div class="emailwrapper">
                <div class="main">
                    <div class="content">
                    <div>
                    <h1>Let’s keep in touch!</h1>
                    <div>
                        <div style="padding:20px;">
                            <div><span style="text-align:center;">Thank you for contacting us. Our team will contact you within 3 working days. You message as shown below</span></div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
            </html>`
            }
          }
        }
      },
      function (err, data) {
        if (err) {
          throw new Error('Send message to customer failed')
        } else {
          console.log('Email sent:')
          console.log(data)
        }
      }
    )
    const adminEmail = ['theeraphat.a@blockfint.com', 'max.jakkapat@gmail.com']
    ses.sendEmail(
      {
        Source: from,
        Destination: { ToAddresses: adminEmail },
        Message: {
          Subject: {
            Data: sub
          },
          Body: {
            Html: {
              Data: content
            }
          }
        }
      },
      function (err, data) {
        if (err) {
          throw new Error('Send message to admin failed')
        } else {
          console.log('Email sent:')
          console.log(data)
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}

export default (req, res) => {
  if (req.method === 'POST') {
    try {
      const to = [req.body.email] // Email address must be an array

      // Subject of your email
      const sub = req.body.subject

      // In this email we are sending HTML
      const content = JSON.stringify(req.body)
      // Use the Email function of our send email utility
      Email(to, sub, content)
      res.json({ message: 'Success!' })
      console.log(req.body)
    } catch (err) {
      console.log(err)
      res.status(400).json(Error)
    }
  }
}
