import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { ReactComponent as Logo } from 'assets/logos/blockfint-small.svg'
export default function Home() {
  return (
    <div>
      <PrimaryButton logo={<Logo style={{ fontSize: '1.5rem' }} />}>Label</PrimaryButton>
    </div>
  )
}
