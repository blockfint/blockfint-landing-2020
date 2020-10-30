// import aws from 'aws-sdk'
// use AWS global variables
// aws.config.credentials.accessKeyId = process.env.ACCESS_KEY_ID
// aws.config.credentials.secretAccessKey = process.env.SECRET_ACCESS_KEY
// aws.config.region = process.env.REGION

// var aws = require('aws-sdk')
import aws from 'aws-sdk'
aws.config.credentials.accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID
aws.config.credentials.secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
aws.config.region = process.env.NEXT_PUBLIC_REGION

// Create an Email function
function Email(to, sub, content) {
  const ses = new aws.SES()
  const CustomerSubject = 'Hello Customer'
  const from = 'dev@blockfint.com'
  // 'dev@blockfint.com' // The email address added here must be verified in Amazon SES
  //Amazon SES email format
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
        console.log(err)
      } else {
        console.log('Email sent:')
        console.log(data)
      }
    }
  )

  const devmail = ['theeraphat.a@blockfint.com']
  const devSubject = 'Test Dev1'
  const devContent = 'test content1'

  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: devmail },
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
        console.log(err)
      } else {
        console.log('Email sent:')
        console.log(data)
      }
    }
  )
}

export default (req, res) => {
  if (req.method === 'POST') {
    try {
      const to = [req.body.email] // Email address must be an array

      // Subject of your email
      const sub = req.body.subject

      // In this email we are sending HTML
      const content = req.body.name + req.body.contents
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
