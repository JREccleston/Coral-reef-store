
export const products = [
    {
        id: "1",
        name: "Dragon Soul Torch",
        price: "$100",
        description: "",
        image: "/Images/Moses.jpg"
    },
    {
        id: "2",
        name: "Todd's Torch",
        price: "$50",
        description: "",
        image: "/Images/Moses.jpg"
    },
    {
        id: "3",
        name: "Toxic Hammer",
        price: "$75",
        description: "",
        image: "/Images/Moses.jpg"
    }

]
let card = ""

products.forEach((product) => {
    card += `
    <div class="relative flex flex-col text-black bg-sky100 shadow-md w-80 rounded-xl bg-clip-border">
    <div class="relative mx-4 mt-4 overflow-hidden text-black bg-sky100 h-60 rounded-xl bg-clip-border">
      <img
        src="${product.image}"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${product.name}
        </p>
        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${product.price}
        </p>
      </div>
      <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
        With plenty of talk and listen time, voice-activated Siri access, and an
        available wireless charging case.
      </p>
    </div>
    <div class="p-6 pt-0">
      <button
        class="block w-full select-none rounded-lg bg-orange-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  </div>`
})

document.querySelector('.product-grid').innerHTML = card;
