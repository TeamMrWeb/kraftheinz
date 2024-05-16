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
      <div className="shadow-[0_10px_20px_20px_rgb(0,0,0)] md:shadow-[0_10px_30px_30px_rgb(0,0,0)] w-full z-40"></div>
      <div className="w-full flex justify-center flex-col items-center top-shadow z-20 bg-black rounded-br-[90px] md:rounded-br-[150px] pb-8 md:pb-20 pt-10 md:pt-14">
        <main className="w-full max-w-[650px] flex justify-center items-center flex-col gap-10 px-6">
          <Header />
          <Rules />
          <Form />
          <SocialMedia className="md:mt-5" />
        </main>
      </div>
      <div className="absolute left-0 -bottom-8 h-[240px] md:h-[200px] w-full pt-52 bg-mustard">
        <Sponsors />
      </div>
    </div>
  )
}
