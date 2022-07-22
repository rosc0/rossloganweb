interface ImageTileInterface {
  imageUrl: any
  centered?: boolean
}

const ImageTile = ({
  imageUrl,
  centered = false,
}: ImageTileInterface) => {
  return (
    <div className='h-96 sm:h-64'>
      <div
        className={`w-full h-full bg-cover ${centered ? 'bg-center' : 'bg-left-top'}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </div>
  )
}

export default ImageTile