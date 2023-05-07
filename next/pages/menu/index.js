import Container from "components/container"
import Hero from 'components/hero'
import Menu from "components/menu"

export default function MenuHome() {
  return (
    <Container>
        <Hero
          title="メニュー"
          subtitle="商品ページ"
        />
        <Menu attribute=''/>
    </Container>
  )
}

