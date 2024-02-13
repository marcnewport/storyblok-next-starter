import NextImage from 'next/image'

const imageLoader = ({ src, width, height, quality }) => {
  const url = [src]

  // if (width || height) {

  // }

  const filters = [`quality(${quality})`]
}

export function Image() {
  return (
    <NextImage
      // loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
