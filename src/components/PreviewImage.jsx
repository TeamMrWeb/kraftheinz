function PreviewImage({ previewImage, removePreviewImage }) {
  return (
    <div className="relative">
      <div
        className="bg-black p-3 rounded-full flex justify-center items-center absolute top-2 right-2 z-10 hover:bg-crimson cursor-pointer"
        onClick={removePreviewImage}
      >
        <img
          className="size-5"
          src="/assets/images/close-icon.png"
          alt="Icono de cerrar"
        />
      </div>
      <img src={previewImage} alt="Recibo de compra" />
    </div>
  )
}

export default PreviewImage
