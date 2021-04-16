import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Controller, useController, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { Success } from './components/Success'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactComponent as HeroBottom } from '@blockfint/website/assets/bg/hero-bottom.svg'
import { ReactComponent as CloseSvg } from '@blockfint/website/assets/icons/close.svg'
import { Container, IconButton } from '@material-ui/core'
import axios from 'axios'
import { useTranslation } from 'next-i18next'

const StyleHeroTop = styled(HeroBottom)`
  position: absolute;
  top: -10%;
  left: 0;
  z-index: -1;
  transform: scale(-1, -1);
  color: #ffffff;
  font-size: clamp(8rem, 20vw, 17rem);
`

const StyleHeroBottom = styled(HeroBottom)`
  position: absolute;
  bottom: -10%;
  right: 0;
  z-index: -1;
  color: var(--white);
  font-size: clamp(8rem, 20vw, 17rem);
`

const Background = styled(motion.div)`
  padding: 8rem 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #eef6f7;
`

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    top: 3.75rem;
    right: 3.75rem;
  }
`
const Content = styled.div`
  max-width: 41.25rem;
  margin: 0 auto;
  max-height: 75vh;
  overflow-y: auto;
`
const Title = styled.h2`
  text-align: center;
  line-height: 1.06;
  letter-spacing: -0.8px;
  @media ${BREAKPOINT.tablet} {
    font-size: 2.125rem;
  }
`

const Form = styled.form`
  margin: 2.5rem 0;
`
const TwoColumn = styled.div`
  display: grid;
  grid-gap: 1.75rem 1.5rem;
  @media ${BREAKPOINT.tablet} {
    grid-gap: 1.75rem 1.25rem;
    grid-auto-rows: 3.25rem;
    grid-template-columns: 1fr 1fr;
  }
`
export const OutlineTextField = styled(TextField).attrs((props) => ({
  ...props,
  variant: 'outlined'
}))`
  &.MuiFormControl-root {
    display: flex;
  }
  .MuiOutlinedInput-root {
    height: 100%;
    font-weight: 400;
    font-size: 1rem;
    background: var(--white);
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--grey-4);
    border-radius: 0.375rem;
  }
  .MuiInputBase-root.Mui-disabled {
    color: var(--light-grey-blue);
    background-color: var(--pale-grey);
  }

  .MuiInputLabel-outlined {
    font-weight: 400;
    opacity: 0.5;
    color: var(--grey-1);
  }
  .MuiSelect-select:focus {
    background: transparent;
  }
`
const OutlinedTextarea = styled(OutlineTextField)`
  @media ${BREAKPOINT.tablet} {
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-start: 4;
    grid-row-end: 6;
  }
`
const SendButton = styled(Button).attrs((props) => ({
  ...props,
  variant: 'contained'
}))`
  &&& {
    color: var(--white);
    background: var(--secondary);
    @media ${BREAKPOINT.tablet} {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`
const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
const schema = yup.object().shape({
  name: yup.string().trim().required('This field is required'),
  email: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(emailRegExp, 'Please enter valid email address'),
  phone: yup.string().trim().required('This field is required').matches(phoneRegExp, 'Please enter valid phone number'),
  company: yup.string().trim().required('This field is required'),
  service: yup.string().notOneOf([''], 'Please select service'),
  business: yup.string().notOneOf([''], 'Please select business')
})

type FormInfo = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  business: string
  message: string
  admin: string
}
interface Props {
  onClose: () => void
}

export const FormContent: React.FC<Props> = ({ onClose }) => {
  const [isSended, setIsSended] = useState(false)

  const {
    handleSubmit,
    formState: { errors },
    control,
    register
  } = useForm<FormInfo>({
    defaultValues: {
      name: ``,
      email: ``,
      phone: '',
      company: '',
      service: '',
      business: '',
      message: ''
    },
    resolver: yupResolver(schema)
  })
  const { field: service } = useController({ name: 'service', control })
  const { field: business } = useController({ name: 'business', control })
  const { t } = useTranslation()
  const onSubmit = async (data: FormInfo) => {
    await axios({
      method: 'POST',
      url: window.location.origin + '/api/send-email',
      data: {
        name: data.name,
        email: data.email,
        subject: `interested in ${data.service}`,
        phone: data.phone,
        company: data.company,
        service: data.service,
        business: data.business,
        contents: data.message,
        admin: 'akarapanwong@hotmail.com'
      }
    })
    setIsSended(true)
  }

  return (
    <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StyleHeroTop />
      <StyleHeroBottom />

      <CloseButtonWrapper>
        <IconButton onClick={onClose}>
          <CloseSvg />
        </IconButton>
      </CloseButtonWrapper>

      <Container maxWidth="lg">
        <AnimatePresence>
          {!isSended && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, translateX: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Content>
                <Title>Contact Us</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <TwoColumn>
                    <OutlineTextField
                      label={t('common:name')}
                      name="name"
                      inputProps={register('name')}
                      error={Boolean(errors?.name)}
                      helperText={<ErrorMessage errors={errors} name="name" />}
                    />
                    <OutlineTextField
                      label={t('common:email')}
                      name="email"
                      inputProps={register('email')}
                      error={Boolean(errors?.email)}
                      helperText={<ErrorMessage errors={errors} name="email" />}
                    />
                    <OutlineTextField
                      label={t('common:phone-number')}
                      name="phone"
                      type="tel"
                      inputProps={register('phone')}
                      error={Boolean(errors?.phone)}
                      helperText={<ErrorMessage errors={errors} name="phone" />}
                    />
                    <OutlineTextField
                      label={t('common:your-company')}
                      name="company"
                      inputProps={register('company')}
                      error={Boolean(errors?.company)}
                      helperText={<ErrorMessage errors={errors} name="company" />}
                    />
                    <OutlineTextField
                      select
                      error={Boolean(errors?.service)}
                      helperText={<ErrorMessage errors={errors} name="service" />}
                      label={t('common:select-your-interested-product')}
                      SelectProps={{
                        native: true
                      }}
                      inputProps={service}
                    >
                      <option value="" disabled></option>
                      {['Agri Trac', 'Gideon', 'Neo Bank', 'Thinker'].map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}

                      <option value="Others">{t('common:others')}</option>
                    </OutlineTextField>
                    <OutlineTextField
                      select
                      error={Boolean(errors?.business)}
                      helperText={<ErrorMessage errors={errors} name="business" />}
                      label={t('common:industry')}
                      inputProps={business}
                      SelectProps={{
                        native: true
                      }}
                    >
                      <option value="" disabled></option>
                      {[
                        t('common:agency'),
                        t('common:business-consultant'),
                        t('common:design'),
                        t('common:entertainment'),
                        t('common:finance-and-banking'),
                        t('common:food and beverage'),
                        t('common:health-care'),
                        t('common:innovation-and-technology'),
                        t('common:insurance'),
                        t('common:news'),
                        t('common:real-estate')
                      ].map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                      <option value="Others">Others</option>
                    </OutlineTextField>

                    <OutlinedTextarea
                      multiline
                      fullWidth
                      rows={4}
                      inputProps={register('message')}
                      name="message"
                      label={t('common:send-us-your-message')}
                    />
                    <SendButton type="submit">{t('common:send')}</SendButton>
                  </TwoColumn>
                </Form>
              </Content>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isSended && (
            <motion.div
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Success />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Background>
  )
}

export default FormContent
