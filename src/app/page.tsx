

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputValue] = useState("");
  const {push} = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div className=" bg-slate-700 ">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-emerald-400 rounded-md shadow-2xl px-4 py-2">
          <nav className="px-4 py-2 ">
            <ul className="flex gap-4 justify-center">

           <li className="px-2 py-2 rounded-sm hover:bg-slate-300"><Link href='/'>Home</Link></li> 
           <li className="px-2 py-2 rounded-sm hover:bg-slate-300"> <Link href='/prediction'>Prediction</Link></li>
            </ul>
          </nav>
          <div>
            <h1 className="text-amber-800 border-b-2 mb-5 border-lime-700">
              Enter any Name to predict
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
            value={inputVal}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="px-2 py-2 w-full rounded-md border-2 outline-lime-700 mt-4"
            />
            <br />
            <button
              type="submit"
              className="mt-7 w-full bg-lime-700 px-2 py-2 text-xl rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


