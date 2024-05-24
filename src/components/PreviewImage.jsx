function PreviewImage({
  previewImage,
  removePreviewImage,
  alt,
  handleShowPreviewImage
}) {
  return (
    <div className="relative">
      <button
        className="size-10 rounded-full flex justify-center items-center absolute top-2 left-2 z-10 cursor-pointer bg-crimson"
        onClick={removePreviewImage}
        type="button"
      >
        <img
          className="size-6"
          src="/assets/images/trash-icon.png"
          alt="Icono de borrar"
        />
      </button>
      <button
        className="size-10 rounded-full flex justify-center items-center absolute top-2 right-2 z-10 cursor-pointer bg-crimson text-2xl font-normal"
        onClick={handleShowPreviewImage}
        type="button"
      >
        Ok
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
