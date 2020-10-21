import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { ReactComponent as Logo } from 'assets/logos/blockfint-small.svg'
import { Navbar } from '../components/layouts/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar transparent={false}>
        <PrimaryButton logo={<Logo style={{ fontSize: '1.5rem' }} />}>Label</PrimaryButton>
      </Navbar>
    </div>
  )
}
