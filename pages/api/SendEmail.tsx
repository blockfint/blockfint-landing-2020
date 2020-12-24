import aws from 'aws-sdk'
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_GIDEON,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_GIDEON,
  region: process.env.AWS_REGION_GIDEON
})

// aws.config.credentials.accessKeyId = process.env.AWS_ACCESS_KEY_ID_GIDEON
// aws.config.credentials.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_GIDEON
// aws.config.region = process.env.AWS_REGION_GIDEON

// Create an Email function

const ses = new aws.SES()

function Email(to, sub, content) {
  return new Promise((resolve, reject) => {
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
                    <title>Gideon Email Contact</title>
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
                                    <img src="https://www.img.in.th/images/c52ae8a99e12dd062b8f3151e304411e.png" alt="images_Logos">
                                </div>
                                <div>
                                    <div class="MainLayout">
                                        <div>
                                            <h1>Let’s keep in touch!</h1>
                                        </div>
                                        <div class="description">
                                            <span>Thank you for contacting us. Our team will contact you
                                                within 3 working days. You message as shown below
                                            </span>
                                        </div>
                                        <div class="box">
                                            <div class="contents">
                                                <div class="sub-contents">
                                                    <div>
                                                        <h2>Full Name: </h2>
                                                    </div>
                                                    <div>
                                                        <h3>mock</h3>
                                                    </div>
                                                </div>
                                                <div class="sub-contents">
                                                    <div>
                                                        <h2>Email: </h2>
                                                    </div>
                                                    <div>
                                                        <h3>mock</h3>
                                                    </div>
                                                </div>
                                                <div class="sub-contents">
                                                    <div>
                                                        <h2>Subject: </h2>
                                                    </div>
                                                    <div>
                                                        <h3>mock</h3>
                                                    </div>
                                                </div>
                                                <div class="sub-contents">
                                                    <div>
                                                        <h2>Message:</h2>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3> <br />Hi! Gideon team. We have a look on all your pilot site projects and
                                                        they
                                                        look very interesting! We are ABC Energy company and looking for EMS to work
                                                        with. Looking forward to hearing from you! </h3>
                                                </div>
                                            </div>
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

      const adminEmail = ['theeraphat.a@blockfint.com']
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
      return resolve('Success')
    } catch (error) {
      console.log(error)
      return resolve(error)
    }
  })
}

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const to = [req.body.email] // Email address must be an array

      // Subject of your email
      const sub = req.body.subject

      // In this email we are sending HTML
      const content = JSON.stringify(req.body)
      // Use the Email function of our send email utility
      await Email(to, sub, content)
      res.json({ message: 'Success!' })
      console.log(req.body)
    } catch (err) {
      console.log(err)
      res.status(400).json(Error)
    }
  }
}
