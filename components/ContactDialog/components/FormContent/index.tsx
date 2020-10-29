import { Button, FormControl, InputLabel, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BREAKPOINT } from 'assets/globalStyle'
import { Success } from './components/Success'
import { AnimatePresence, motion } from 'framer-motion'
const Content = styled.div`
  max-width: 41.25rem;
  margin: 0 auto;
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
  max-height: 75vh;
  overflow-y: auto;
  display: grid;
  grid-gap: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    grid-gap: 1.75rem 1.25rem;
    grid-auto-rows: 3rem;
    grid-template-columns: 1fr 1fr;
  }
`
export const OutlineTextField = styled(TextField).attrs((props) => ({ ...props, variant: 'outlined' }))`
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
`
const OutlinedTextarea = styled(OutlineTextField)`
  @media ${BREAKPOINT.tablet} {
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-start: 4;
    grid-row-end: 6;
  }
`
const SendButton = styled(Button).attrs((props) => ({ ...props, variant: 'contained' }))`
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
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
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

export const FormContent: React.FC = () => {
  const [isSended, setIsSended] = useState(false)
  const { handleSubmit, errors, control, register } = useForm({
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
  const onSubmit = (data) => {
    //TODO send here
    setIsSended(true)
  }

  return (
    <>
      <AnimatePresence>
        {!isSended && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, translateX: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Content>
              <Title>
                Get in touch and
                <br /> find out how we can help
              </Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <TwoColumn>
                  <OutlineTextField
                    label="Name"
                    name="name"
                    inputRef={register}
                    error={Boolean(errors?.name)}
                    helperText={<ErrorMessage errors={errors} name="name" />}
                  />
                  <OutlineTextField
                    label="Email"
                    name="email"
                    inputRef={register}
                    error={Boolean(errors?.email)}
                    helperText={<ErrorMessage errors={errors} name="email" />}
                  />
                  <OutlineTextField
                    label="Phone number"
                    name="phone"
                    type="tel"
                    inputRef={register}
                    error={Boolean(errors?.phone)}
                    helperText={<ErrorMessage errors={errors} name="phone" />}
                  />
                  <OutlineTextField
                    label="Your company"
                    name="company"
                    inputRef={register}
                    error={Boolean(errors?.company)}
                    helperText={<ErrorMessage errors={errors} name="company" />}
                  />

                  <Controller
                    name="service"
                    as={
                      <OutlineTextField
                        select
                        error={Boolean(errors?.service)}
                        helperText={<ErrorMessage errors={errors} name="service" />}
                        label="Select your interested service"
                        SelectProps={{
                          native: true
                        }}
                      >
                        <option value="" disabled></option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </OutlineTextField>
                    }
                    control={control}
                  />

                  <Controller
                    name="business"
                    as={
                      <OutlineTextField
                        select
                        error={Boolean(errors?.business)}
                        helperText={<ErrorMessage errors={errors} name="business" />}
                        label="  Select your business"
                        SelectProps={{
                          native: true
                        }}
                      >
                        <option value="" disabled></option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </OutlineTextField>
                    }
                    control={control}
                  />
                  <OutlinedTextarea
                    multiline
                    fullWidth
                    rows={4}
                    inputRef={register}
                    name="message"
                    label="Send us your message"
                  />
                  <SendButton type="submit">Send</SendButton>
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
    </>
  )
}
