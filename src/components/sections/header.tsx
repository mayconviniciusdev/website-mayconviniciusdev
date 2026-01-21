import Menu from "../ui/menu";
import Banner from "../ui/banner";

export default function Header() {
  return (
    <section style={{backgroundImage: "url('/backgroundImage.png')", backgroundSize: "cover", backgroundPosition: "center", paddingLeft: 16, paddingRight: 16}}>
      <Menu/>
      <div className="flex items-center justify-center h-80">
        <Banner/>
      </div>
    </section>
  )
}