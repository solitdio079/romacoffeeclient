export default function SplashScreen() {
    return (
      <div
        className="flex flex-col min-h-screen justify-center items-center"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        <img src="./logo.png" className="animate-spin w-14 lg:w-24" />
      </div>
    )
}