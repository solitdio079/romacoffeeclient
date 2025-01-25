/* eslint-disable react/prop-types */
export default function Mask({ mask, children }) {
  return (
    <div
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    >
      {children}
    </div>
  )
}
