import ButtonWithImage from "./form/ButtonWithImage"
import PreviewImage from "./PreviewImage"
import PreviewImageModal from "./PreviewImageModal"

export default function UploadImageButton({
  previewImage,
  handleShowPreviewImage,
  handleSetPreviewImage,
  imageType,
  removePreviewImage,
  text,
  alt,
  inputRef
}) {
  return (
    <>
      <div className="w-full flex justify-center md:items-start flex-col items-center">
        <ButtonWithImage
          text={text}
          src={
            previewImage.image
              ? "/assets/images/eye-icon.svg"
              : "/assets/images/download-icon.png"
          }
          alt="Icono de cargar archivo"
          imageClassName={previewImage.image ? "w-7" : "w-6 mb-1"}
          className="duration-300 hover:bg-dark-crimson"
          htmlFor={previewImage.image ? "" : imageType}
          onClick={() => handleShowPreviewImage(imageType)}
        />
        <input
          type="file"
          id={imageType}
          name={imageType}
          className="invisible absolute"
          ref={inputRef}
          onChange={e => handleSetPreviewImage(e, imageType)}
          accept="image/png, image/jpg, image/jpeg"
        />
      </div>
      {previewImage.show && (
        <PreviewImageModal>
          <PreviewImage
            previewImage={previewImage.image}
            removePreviewImage={() => removePreviewImage(imageType)}
            handleShowPreviewImage={() => handleShowPreviewImage(imageType)}
            alt={alt}
          />
        </PreviewImageModal>
      )}
    </>
  )
}
