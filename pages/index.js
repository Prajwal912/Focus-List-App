import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState({title:"", desc:""})

  const addData = () =>{
    //step 1 to create a local storage named todosLocal
   const todos = localStorage.getItem("todosLocal");

   if(todos){
    //step 2 to convert the todosLocal into js by using the JSON.parse
    let todosJson = JSON.parse(todos);

    //step 3 to filter out if the same title is there or not
    if(todosJson.filter(val => { return val.title == todo.title}).length > 0){
      alert("todo of this title has been added already")
    }else{
     
      //push the parse js data into todo
      todosJson.push(todo)  
      // then set the localStorage with the same name and then convert into json obj using the stringify
      localStorage.setItem("todosLocal", JSON.stringify(todosJson) )
      alert("todo has been added successfully")
      setTodo({title:"", desc:""})
    }
   }else{
    localStorage.setItem("todosLocal", JSON.stringify([todo]) )

   }
  }

  const onChangeFun = (e) =>{
    setTodo({...todo, [e.target.name]: e.target.value})
    console.log(todo)
  }
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <>
          <section class="text-gray-600 body-font mt-10">
            <div class="container px-5 py-5 mx-auto items-center">
              <div class=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                  Add Your Focus List
                </h2>
                <div class="relative mb-4">
                  <label
                    for="title"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Focus List Title
                  </label>
                  <input
                    type="text"
                    onChange={onChangeFun}
                    value={todo.title}
                    id="title"
                    name="title"
                    class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label
                    for="desc"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Focus List Text
                  </label>
                  <input
                    type="text"
                    onChange={onChangeFun}
                    value={todo.desc}
                    id="desc"
                    name="desc"
                    class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button onClick={addData} class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg w-fit">
                  Add your Focus List
                </button>
                <p class="text-xs text-gray-500 mt-3">
                  Click The Button To Save your Todos Safely.
                </p>
              </div>
            </div>
          </section>
        </>
      </div>
    </>
  );}
