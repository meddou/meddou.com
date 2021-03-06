import React from 'react'

function Image({ src, alt, className }) {
  return (
    <picture className={className}>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img draggable="false" src={src} alt={alt || ''} className={className} />
    </picture>
  )
}

export default Image
