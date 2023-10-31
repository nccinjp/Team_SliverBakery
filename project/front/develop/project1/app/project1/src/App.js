import React, {useState} from 'react';
// import './index.css'

function App() {
  const menu = [
    {name: "豚骨ラーメン", image: "tonkotu.png", price: 900},
    {name: "炒飯", image: "fried_rice.jpeg", price: 500},
    {name: "ギョーザ", image: "gyo-za.JPG", price: 300},
  ];
  const [products, setproducts] = useState(menu);

  return (
    <>
      {products.map( product => (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={"./images/" + product.image} alt={product.name} />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      ))}
    </>
  );
}

export default App;
