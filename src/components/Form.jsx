import React from "react";

const Form = () => {
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
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Email</label>
        <br />
        <input
          className="mb-1 text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          type="email"
          placeholder="Enter your Email id"
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Phone</label>
        <br />
        <input
          className="mb-1 text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          type="number"
          placeholder="Enter your phone number"
        />
        <br />
        <label className="text-sm font-bold text-gray-700" htmlFor="">Feedback</label>
        <br />
        <textarea
          className="text-gray-400 mb-1 h-[8rem] text-sm bg-[#eceaea] rounded-md w-[25rem] py-2 px-3 outline-none"
          placeholder="Give your relavant feedback"
        ></textarea>
        <div className="flex items-center text-sm gap-2 font-bold">
          <input type="checkbox" />
          <p>I'm not a robot</p>
        </div>

        <button className="mt-5 bg-black px-2 py-1 rounded-md text-white">Send message</button>
      </form>
    </div>
  );
};

export default Form;
