export default function Modal({ text, setShowModal }) {
  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center z-30 bg-[#000000af]">
      <div className="w-full max-w-lg flex justify-center items-center p-6 bg-crimson rounded-[40px] text-2xl md:text-5xl border-[2px] text-center border-white whitespace-break-spaces relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-5 top-5"
        >
          <img
            className="size-5"
            src="/assets/images/close-icon.png"
            alt="Icono de cerrar"
          />
        </button>
        {text}
      </div>
    </div>
  )
}
