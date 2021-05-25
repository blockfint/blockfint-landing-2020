import { Layout } from '@blockfint/website/components/layouts'
import styled, { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { typography } from '@blockfint/website/styles/typography'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'

const Global = createGlobalStyle`
body{
  ${typography}
}
`

const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.4375rem;
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;

  @media ${BREAKPOINT.tablet} {
    margin-left: 6.5625rem;
    margin-right: 6.5625rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    margin-left: 19.875rem;
    margin-right: 19.875rem;
    margin-top: 3.75rem;
    margin-bottom: 2.5rem;
  }
`

const TextBlock = styled.div`
  margin-bottom: 2.5rem;
  @media ${BREAKPOINT.tablet} {
    margin-bottom: 2.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    margin-bottom: 3.75rem;
  }
`

const List = styled.li`
  ::marker {
    color: #00b8de;
  }
`

const PolicyPage = () => {
  return (
    <>
      <Global />
      <Layout>
        <Container>
          <TextBlock>
            <p>Effective Date: May 18,2021</p>
          </TextBlock>
          <TextBlock>
            <h3>Privacy Policy for Blockfint</h3>

            <p>
              At Blockfint, accessible from www.blockfint.com, one of our main priorities is the privacy of our
              visitors. This Privacy Policy document contains types of information that is collected and recorded by
              Blockfint and how we use it.
            </p>
            <br />
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to
              contact us.
            </p>
            <br />
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with
              regards to the information that they shared and/or collect in Blockfint. This policy is not applicable to
              any information collected offline or via channels other than this website.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>Consent</h3>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </TextBlock>
          <TextBlock>
            <h3>Information we collect</h3>

            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it,
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <br />
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email
              address, phone number, the contents of the message and/or attachments you may send us, and any other
              information you may choose to provide.
            </p>
            <br />
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name,
              company name, address, email address, and telephone number.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>How we use your information</h3>

            <p>We use the information we collect in various ways, including to:</p>
            <br />
            <p>
              <ul style={{ listStylePosition: 'inside' }}>
                <List>Provide, operate, and maintain our website</List>
                <List>Improve, personalize, and expand our website</List>
                <List>Understand and analyze how you use our website</List>
                <List>Develop new products, services, features, and functionality</List>
                <List>
                  Communicate with you, either directly or through one of our partners, including for customer service,
                  to provide you with updates and other information relating to the website, and for marketing and
                  promotional purposes
                </List>
                <List>Send you emails</List>
                <List>Find and prevent fraud</List>
              </ul>
            </p>
          </TextBlock>
          <TextBlock>
            <h3>Log Files</h3>

            <p>
              Blockfint follows a standard procedure of using log files. These files log visitors when they visit
              websites. All hosting companies do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider
              (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked
              to any information that is personally identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the website, and gathering demographic
              information.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>Cookies and Web Beacons</h3>
            <p>
              Like any other website, Blockfint uses 'cookies'. These cookies are used to store information including
              visitors' preferences, and the pages on the website that the visitor accessed or visited. The information
              is used to optimize the users' experience by customizing our web page content based on visitors' browser
              type and/or other information.
            </p>
            <br />
          </TextBlock>
          <TextBlock>
            <h3>Advertising Partners Privacy Policies</h3>

            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Blockfint.
            </p>
            <br />
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are
              used in their respective advertisements and links that appear on Blockfint, which are sent directly to
              users' browser. They automatically receive your IP address when this occurs. These technologies are used
              to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content
              that you see on websites that you visit.
            </p>
            <br />
            <p>
              Note that Blockfint has no access to or control over these cookies that are used by third-party
              advertisers.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>Third Party Privacy Policies</h3>

            <p>
              Blockfint's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
              consult the respective Privacy Policies of these third-party ad servers for more detailed information. It
              may include their practices and instructions about how to opt-out of certain options.{' '}
            </p>
            <br />
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed
              information about cookie management with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>

            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <br />
            <p>
              Request that a business that collects a consumer's personal data disclose the categories and specific
              pieces of personal data that a business has collected about consumers.
            </p>
            <br />
            <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
            <br />
            <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
            <br />
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
          </TextBlock>
          <TextBlock>
            <h3>GDPR Data Protection Rights</h3>

            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is
              entitled to the following:
            </p>
            <br />
            <p>
              The right to access – You have the right to request copies of your personal data. We may charge you a
              small fee for this service.
            </p>
            <br />
            <p>
              The right to rectification – You have the right to request that we correct any information you believe is
              inaccurate. You also have the right to request that we complete the information you believe is incomplete.
            </p>
            <br />
            <p>
              The right to erasure – You have the right to request that we erase your personal data, under certain
              conditions.
            </p>
            <br />
            <p>
              The right to restrict processing – You have the right to request that we restrict the processing of your
              personal data, under certain conditions.
            </p>
            <br />
            <p>
              The right to object to processing – You have the right to object to our processing of your personal data,
              under certain conditions.
            </p>
            <br />
            <p>
              The right to data portability – You have the right to request that we transfer the data that we have
              collected to another organization, or directly to you, under certain conditions.
            </p>
            <br />
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
            <br />
          </TextBlock>
          <TextBlock>
            <h3>Children's Information</h3>

            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage
              parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <br />
            <p>
              Blockfint does not knowingly collect any Personal Identifiable Information from children under the age of
              13. If you think that your child provided this kind of information on our website, we strongly encourage
              you to contact us immediately and we will do our best efforts to promptly remove such information from our
              records.
            </p>
          </TextBlock>
        </Container>
      </Layout>
    </>
  )
}

export default PolicyPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'works', 'project'], nextI18NextConfig)

  return {
    props: {
      ...result
    }
  }
}
