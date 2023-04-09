import axios from "axios";
import { FunctionComponent, useState } from "react";

const EmailForm:FunctionComponent<{
  id: string,
}> = ({id}) => {
  const [emailFrom, setEmailFrom] = useState("")
  const [emailTo, setEmailTo] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: any) => {
    setMessage("Email sending...")
    event.preventDefault()
    try {
      const {data} = await axios({
        method: "POST",
        url: "api/files/email",
        data: {
          id,
          emailFrom,
          emailTo,
        }
      })
      setMessage(data.message)
    } catch(error: any) {
      setMessage(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-2 space-y-3">
      <h3>You can also email your file.</h3>
      <form className="flex flex-col items-center justify-center w-full p-2 space-y-3" onSubmit={handleSubmit}>
        <input 
          className="p-1 text-white bg-gray-800 border-2 focus:outline-none" 
          type="email" 
          placeholder="Your Email" 
          required 
          onChange={(event) => setEmailFrom(event.target.value)}
        />
        <input 
          className="p-1 text-white bg-gray-800 border-2 focus:outline-none" 
          type="email" 
          placeholder="Recipient's Email" 
          required
          onChange={(event) => setEmailTo(event.target.value)}
        />
        <button className="bg-gray-900 p-2 my-3 rounded-md w-44 focus:outline-none" type="submit">Email</button>
      </form>
      {message && <p className="font-medium text-green-500">{message}</p>}
    </div>
  )
}

export default EmailForm;