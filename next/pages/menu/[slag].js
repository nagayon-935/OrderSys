import Container from "components/container"
import Hero from 'components/hero'
import { useRouter } from "next/router";
import Menu from "components/menu";

export default function TypeSlag() {
  const router = useRouter();
  const slag = router.query.slag;

  return (
    <Container>
      <Hero
        title={slag}
        subtitle="商品ページ"
        imageOn
        titleSize={slag === "高架下ラーメン" ? "1.2" : "1.4"}
      />
      <Menu attribute={slag}/>
    </Container>
  )
}