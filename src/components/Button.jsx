function Button({ label, textColor}) {
  return (
    <a href="#_" className="relative font-montserrat inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-red-500">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className={`relative ${textColor}`}>{label}</span>
    </a>
  )
}

export default Button