export default function Modal({ text, setShowModal, children, type }) {
  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center z-30 bg-[#000000af]">
      <div className="w-max max-w-lg flex justify-center items-center p-2 min-h-40 md:min-h-64 bg-crimson text-4xl md:text-5xl border-[2px] text-center border-white whitespace-break-spaces relative modal">
        {type !== "image" && (
          <button
            onClick={() => setShowModal(false)}
            className="absolute right-5 top-5"
            type="button"
          >
            <img
              className="size-5"
              src="/assets/images/close-icon.png"
              alt="Icono de cerrar"
            />
          </button>
        )}
        {text}
        {children}
      </div>
    </div>
  )
}
