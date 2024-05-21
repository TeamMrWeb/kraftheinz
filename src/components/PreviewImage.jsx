function PreviewImage({
  previewImage,
  removePreviewImage,
  alt,
  handleShowPreviewImage
}) {
  return (
    <div className="relative">
      <button
        className="p-98 rounded-full flex justify-center items-center absolute top-2 left-2 z-10 cursor-pointer"
        onClick={removePreviewImage}
        type="button"
      >
        <img
          className="size-6 md:size-7"
          src="/assets/images/trash-icon.png"
          alt="Icono de borrar"
        />
      </button>
      <button
        className="p-98 rounded-full flex justify-center items-center absolute top-2 right-2 z-10 cursor-pointer"
        onClick={handleShowPreviewImage}
        type="button"
      >
        <img
          className="size-5 md:size-6"
          src="/assets/images/close-icon.png"
          alt="Icono de cerrar"
        />
      </button>
      <img
        src={previewImage}
        alt={alt}
        className="size-60 md:size-96 object-cover"
      />
    </div>
  )
}

export default PreviewImage
