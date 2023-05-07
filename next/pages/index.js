import Container from 'components/container'
import Hero from 'components/hero'
import Kindbox from 'components/kindbox'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

export default function Home() {

  return (
    <Container>
      <Hero
        title="大中"
        subtitle="特製ラーメン"
        imageOn
      />
      <TwoColumn>
        <TwoColumnMain>
          <Kindbox kind="ラーメン"></Kindbox>
          <Kindbox kind="サイドメニュー"></Kindbox>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact/>
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}