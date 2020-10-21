import { ReactComponent as Logo } from 'assets/logos/blockfint-small.svg'
import { SecondaryButton, PrimaryButton } from 'components/Buttons'
export default function Home() {
  return (
    <div style={{ margin: '2rem' }}>
      <SecondaryButton>SSS</SecondaryButton>
      <PrimaryButton logo={<Logo style={{ fontSize: '1.5rem' }} />}>Label</PrimaryButton>
    </div>
  )
}
