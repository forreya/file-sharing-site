import { FunctionComponent, useState } from "react";

const EmailForm:FunctionComponent<{
  id: string,
}> = ({id}) => {
  const [emailFrom, setEmailFrom] = useState("")
  const [emailTo, setEmailTo] = useState("")
  const [message, setMessage] = useState(null)

  return (
    <div>
      <form className="" >
        <input 
          className="" 
          type="email" 
          placeholder="Email From" 
          required 
          onChange={(event) => setEmailFrom(event.target.value)}
        />
        <input 
          className="" 
          type="email" 
          placeholder="Email To" 
          required
          onChange={(event) => setEmailTo(event.target.value)}
        />
        <button className="">Email</button>
      </form>
    </div>
  )
}

export default EmailForm;