import Form from "./components/Form"
import Header from "./components/Header"
import Hero from "./components/Hero"
import PreLoader from "./components/PreLoader"
import Rules from "./components/Rules"
import SocialMedia from "./components/SocialMedia"
import Sponsors from "./components/Sponsors"
import useAos from "./hooks/useAos"
import useReadyContent from "./hooks/useReadyContent"

export default function App() {
  useAos()
  const { ready } = useReadyContent()

  return (
    <div className="font-bebasNeue flex flex-col w-full h-full min-h-screen text-white items-center relative bg-black">
      <PreLoader>
        <>
          <Hero />
          {ready && (
            <>
              <div className="w-full flex justify-center flex-col items-center top-shadow z-20 bg-black rounded-br-[90px] md:rounded-br-[150px] pb-8 md:pb-20">
                <main className="w-full max-w-[800px] flex justify-center items-center flex-col gap-10 px-8 md:px-0">
                  <Header />
                  <Rules />
                  <Form />
                  <SocialMedia className="md:mt-5" />
                </main>
              </div>
              <div className="absolute left-0 -bottom-8 h-[240px] md:h-[200px] w-full pt-52 bg-mustard">
                <Sponsors />
              </div>
            </>
          )}
        </>
      </PreLoader>
    </div>
  )
}
