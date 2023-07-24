import { Itens, Title } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Title />
      <Itens />
    </main>
  )
}
