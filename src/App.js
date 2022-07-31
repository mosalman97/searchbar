import React,{useState} from 'react'

function App() {
  const [searchData,setSearchData] = useState("")
  const data = [
      {
          id: 1,
          name: "cat",
      },
      {
          id: 2,
          name: "dog",
      },
      ,
      {
          id: 3,
          name: "fox",
      },
      {
          id: 4,
          name: "dear",
      },
  ];
  return (
    <div>
       <input type="text" placeholder='search...' onChange={(e)=>setSearchData(e.target.value)} value={searchData} />
       {
         data.filter((value)=>{
          if (searchData === ""){
            return value
          }else if(value.name.toLowerCase().includes(searchData.toLowerCase())){
            return value
          }
         }).map((result)=>{
           return <h1>{result.name}</h1>;
         })
       }
       
    </div>
  )
}

export default App