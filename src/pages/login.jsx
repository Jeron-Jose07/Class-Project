import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", pass);
  };

  return (
    <>
      <div>Hi</div>

      <form onSubmit={handlesubmit}>
        <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br /><br />
        <input type="password" required placeholder="Enter your password" value={pass}onChange={(e) => setPass(e.target.value)}/> 
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
