const SignInButton = () => {
  return (
    <a href="#" className="relative px-12 py-2 overflow-hidden font-medium text-red-500 bg-transparent border border-red-500 rounded-full group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-300 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-300 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-300 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-300 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-500 opacity-0 group-hover:opacity-100"></span>
        <span className="font-montserrat relative transition-colors duration-300 delay-200 group-hover:text-white ease">Sign in</span>
    </a>
  )
}

export default SignInButton