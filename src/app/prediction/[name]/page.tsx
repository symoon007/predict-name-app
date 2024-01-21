import Link from "next/link";
interface Params {
    params: {name: string}
}


const getAge = async (name: string) => {
    const res = await fetch(`http://api.agify.io/?name=${name}`) 
    return res.json()
}

const getGender = async (name: string) => {
    const res = await fetch(`http://api.genderize.io/?name=${name}`) 
    return res.json()
}

const getCountry = async (name: string) => {
    const res = await fetch(`http://api.nationalize.io/?name=${name}`) 
    return res.json()
}



export default async function Page({params}: Params) {
    const ageData = getAge(params.name)
    const genderData = getGender(params.name)
    const countryData = getCountry(params.name)

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]) 
  return (
    <div className=" bg-slate-700 h-screen ">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-emerald-400 rounded-md shadow-2xl px-4 py-2">
          <ul>
            <li className="px-2 py-2 rounded-sm hover:bg-slate-300">
              <Link href="/">Home</Link>
              
            </li>
          </ul><hr/> <br/>  
          <div>Personal Info:</div>
          <br/> <hr/> <br/>
          <div className="font-bold">Predicted Name: {params.name}</div>
          <div>Age: {age?.age}</div>
          <div>Gender: {gender?.gender}</div>
          <div>Country: {country?.country[0]?.country_id}</div>
        </div>
      </div>
    </div>
  );
}
