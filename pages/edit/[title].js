//dynamic routes

import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const edit = () => {
    const router = useRouter();
    const {title} = router.query;

    const [todo, setTodo] = useState({title:"", desc:""})

    const updateData = () => {
          localStorage.setItem("todosLocal", JSON.stringify([todo]) )
       }

    useEffect(() => {
     let todos = localStorage.getItem("todosLocal");
     if(todos){
        let todoJSON = JSON.parse(todos);
        let ftodo = todoJSON?.filter(e => title == e.title)  
        if(ftodo?.length > 0){
            setTodo(ftodo[0])
        }
     }
    }, [router.isReady])
    
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
              <button onClick={updateData} class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg w-fit">
                Update your Focus List
              </button>
              <p class="text-xs text-gray-500 mt-3">
                The best Focus List out there.
              </p>
            </div>
          </div>
        </section>
      </>
    </div>
  </>
  )
}

export default edit