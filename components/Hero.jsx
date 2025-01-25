export default function Hero() {
    return (
      <div className="flex">
        <div>
          <h1 className="text-base-content text-4xl">
            Heading 1 Roma Coffee Tea
          </h1>
          <p className="text-base-content/80 text-base">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus. Duis mollis, est non
            commodo luctus.Duis mollis, est non commodo luctus.
          </p>
        </div>
        <div>
          <img
            className="mask mask-half-2 mask-parallelogram size-25"
            src="https://cdn.flyonui.com/fy-assets/components/radio/image-1.png"
            alt="mask image"
          />
        </div>
      </div>
    )
}