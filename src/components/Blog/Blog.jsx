import React from "react";

const Blog = () => {
  return (
    <div className="mb-32">
      <div className="text-center pt-12 pb-32 navbar-background mb-20 md:mb-32">
        <h2 className="font-extrabold text-3xl relative">Blog</h2>
        <img
          className="absolute top-0 right-0  "
          src="https://i.ibb.co/tm2f1FH/Vector-1.png"
          alt=""
        />
        <img
          style={{ top: "126px" }}
          className="absolute left-0"
          src="https://i.ibb.co/k1qf53Y/Vector.png"
          alt=""
        />
      </div>
      <div className="mx-4 md:mx-40">
        <h1 className="font-extrabold text-3xl mb-14">QnA :</h1>
        <div className="md:grid grid-cols-2 gap-5">
            <div className="p-8 bg-slate-200 rounded-lg mb-4">
              <h1 className="font-extrabold text-xl">1. When should you use context API?</h1>
              <p className="font-semibold text-base text-neutral-500 mt-4">Ans. You can use the Context API in React when you need to share data across multiple components, avoid prop drilling, reduce unnecessary re-renders, or decouple state management from the component hierarchy.</p>
            </div>
            <div className="p-8 bg-slate-200 rounded-lg mb-4">
              <h1 className="font-extrabold text-xl">2. What is a custom hook?</h1>
              <p className="font-semibold text-base text-neutral-500 mt-4">Ans. A custom hook is a function in React that allows you to reuse stateful logic across your application. By extracting common logic into separate functions, you can improve the reusability, abstraction, and readability of your code.</p>
            </div>
            <div className="p-8 bg-slate-200 rounded-lg mb-4">
              <h1 className="font-extrabold text-xl">3. What is useRef?</h1>
              <p className="font-semibold text-base text-neutral-500 mt-4">Ans. useRef is a built-in hook in React that allows you to create a mutable reference to an element or a value that persists across renders, and it can be used for accessing DOM elements, caching values, and storing previous values.</p>
            </div>
            <div className="p-8 bg-slate-200 rounded-lg mb-4">
              <h1 className="font-extrabold text-xl">4. What is useMemo?</h1>
              <p className="font-semibold text-base text-neutral-500 mt-4">Ans. useMemo is a built-in hook in React that allows you to memoize the result of a function that is expensive to compute, and it can improve performance by avoiding unnecessary computations on every render.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
