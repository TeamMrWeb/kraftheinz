import Form from "./components/Form"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Rules from "./components/Rules"
import SocialMedia from "./components/SocialMedia"
import Sponsors from "./components/Sponsors"

export default function App() {
  return (
    <div className="font-bebasNeue flex flex-col w-full h-full min-h-screen text-white items-center relative">
      <Hero />
      <div className="w-full flex justify-center flex-col items-center top-shadow z-20 bg-black">
        <main className="w-full max-w-[914px] flex justify-center items-center flex-col py-10 gap-10">
          <Header />
          <Rules />
          <Form />
          <SocialMedia />
        </main>
      </div>
      <div className="absolute left-0 -bottom-8 h-[200px] w-full pt-40 bg-mustard z-20a rounded-tr-[200px]a">
        <Sponsors className={""} />
      </div>
    </div>
  )
}
