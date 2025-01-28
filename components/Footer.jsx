export default function Footer() {
    return (
      <footer className="footer  intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] bg-base-200/60 px-6 py-4">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <img src="./logo.png" className="w-14 lg:w-24" />
          </div>
          <aside className="grid-flow-col items-center">
            <p>
              {' '}
              ©2025{' '}
              <a className="link link-hover font-medium" href="#">
                Roma Coffee Tea
              </a>{' '}
            </p>
          </aside>
          <div className="flex h-5 gap-4">
            <a href="#" className="link" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </a>
            <a
              target="_blank"
              href="https://bysolitdio.net"
              className="link"
              aria-label="bySolitdio Link"
            >
              <img src="./bysolitdio.svg" className="w-16 bg-black p-2"></img>
            </a>
          </div>
        </div>
      </footer>
    )
}