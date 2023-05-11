import React from "react";
import { useEffect, useState } from "react";
const page = () => {
  // const todosLoop = [
  //   { title: "tie", desc: "hey" },
  //   { title: "title1", desc: "new added" },
  //   { title: "new ", desc: "title" },
  // ];
  const [todosLoop, setTodos] = useState([]);

  useEffect(() => {
    let todos = localStorage.getItem("todosLocal");
    setTodos(JSON.parse(todos));
  }, []);

  const deleteItem = (title) => {
    let newtodos = todosLoop.filter((item) => {
      // console.log(item.title != title, "agar button ka title and loop card ka title same hai toh filter out ho jayega card and wahi pr return ho jayega")
      return item.title != title;
    });
    //only true card will push in the localstorage
    localStorage.setItem("todosLocal", JSON.stringify(newtodos));
    setTodos(newtodos);
  };
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900">
              Your Focus List
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed  mb-3 text-2xl">
              Focus List is an all-in-one privacy-focused to-do list, habit and
              mood tracker, and journaling app that helps you prioritize what to
              work on next.
            </p>

            {todosLoop?.length == 0 && (
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Your Todo Will Show here
              </p>
            )}
          </div>

          <div class="flex flex-wrap-m-4">
            {todosLoop.map((item) => {
              return (
                <div class="p-4 lg:w-1/4 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={`https://picsum.photos/600/900?a=${item.title}`}
                    />{" "}
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-gray-900">
                        {item.title}
                      </h2>
                      <p class="mb-4">{item.desc}</p>
                      <span class="inline-flex">
                        <a
                          class="text-gray-500 cursor-pointer"
                          onClick={() => {
                            deleteItem(item.title);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                          >
                            {" "}
                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                          </svg>
                        </a>
                        <a
                          class="ml-2 text-gray-500 cursor-pointer"
                          href={`/edit/${item.title}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            width="24px"
                            height="24px"
                          >
                            <path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;





