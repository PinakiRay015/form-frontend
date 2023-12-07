import React , {useState} from "react";

const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [msg, setMsg] = useState("")

  const handleOnSubmit = async(e) =>
  {
    e.preventDefault();

    if(!name || !email || !msg || !phone)
    {
      alert("please enter all the feilds")
    }

    try {
      let result = await fetch('http://localhost:3000/form' , {
        method : 'post',
        body : JSON.stringify({name , email , phone , msg}),
        headers : {
          'Content-Type' : 'application/json'
        }
      })

      result = await result.json();
      console.log(result);
    } catch (error) {
      console.log({msg : error.message});
    }
  }

  return (
    <div className="w-fit h-[27rem]">
      <form>
        <label className="text-sm font-bold text-gray-700" htmlFor="">
          Name
        </label>
        <br />
        <input
          className="mb-1 text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Email</label>
        <br />
        <input
          className="mb-1 text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          type="email"
          placeholder="Enter your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Phone</label>
        <br />
        <input
          className="mb-1 text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          type="number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Feedback</label>
        <br />
        <textarea
          className="text-gray-400 mb-1 h-[8rem] text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          placeholder="Give your relavant feedback"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="flex items-center text-sm gap-2 font-bold">
          <input type="checkbox" />
          <p>I'm not a robot</p>
        </div>

        <button onClick={handleOnSubmit} type="submit" className="mt-5 bg-black px-2 py-1 rounded-md text-white">Send message</button>
      </form>
    </div>
  );
};

export default Form;
