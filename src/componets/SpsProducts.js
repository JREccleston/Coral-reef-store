export const spsProducts = [
  {
    id: "A1",
    name: "Bali Green Slimer",
    price: '$' + 50.00,
    image: "/Images/GreenSlimer.webp"
  },
  {
    id: "A2",
    name: "TSA Wolly Mammoth",
    price: '$' + 150.00,
    image: "/Images/woolly-mammoth-e1576707077271_2.webp"
  },


]
export let spsProductContainer = ""
spsProducts.forEach((product) => {
  spsProductContainer += `
    <div class="relative flex flex-col text-black bg-b1 shadow-md w-72 rounded-xl bg-clip-border">
    <div class="relative m-1 overflow-hidden text-black bg-sky100 h-60 rounded-xl bg-clip-border">
      <img
        src="${product.image}"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center justify-center flex-col mb-2">
        <p class="block font-kalam text-xl antialiased font-medium leading-relaxed text-black">
        ${product.name}
        </p>
        <p class="block font-kalam text-lg antialiased font-medium leading-relaxed text-black pt-2">
        ${product.price}
        </p>
      </div>
    </div>
    <div class="p-6 pt-0">
      <button
        class="block w-full select-none rounded-lg bg-orange-700 py-3 px-6 text-center align-middle font-kalam text-base font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Cart
      </button>
    </div> 
  </div>`

})







