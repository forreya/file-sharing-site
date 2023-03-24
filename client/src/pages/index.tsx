
function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl font-medium">Share your file!</h1>
      <div className='w-96 flex flex-col items-center 
      bg-gray-800 shadow-xl rounded-xl justify-center' >
        dropzone
        {/* render file */}
        {/* upload button */}
      </div>
    </div>
  )
}

export default Home;