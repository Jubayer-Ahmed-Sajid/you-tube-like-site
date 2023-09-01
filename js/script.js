// Fetching the categories of
const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();


    // getting the array of data which include category and categoryId

    let categories = data.data;
    const categoryContainer = document.getElementById('category-container')

    // setting the value of each tab by the category


    categories.forEach(categories => {
        const tab = categories.category
        const div = document.createElement('div')
        div.innerHTML = `
        <button class ="btn active:bg-red-400 ml-6">
        <a onclick = handleCategoryId(${categories.category_id}); class=" mx-8">${tab}</a>
        </button>
        `
        categoryContainer.appendChild(div);
    });




}



// getting the content of each category



const handleCategoryId = async (categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    const cards = data.data;
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerText = ''
    cards.forEach(cards => {

        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card card-compact rounded-lg ">
    <figure>
    <img src =${cards.thumbnail} class = "w-[312px] h-[200px]">
    <div>
  ${cards.others.posted_date ? `
    <div class="bg-black text-white rounded-lg absolute bottom-3 right-3 p-2">
      <p id="posted">${Math.floor(cards.others.posted_date / 3600)}hrs ${Math.floor((cards.others.posted_date % 3600) / 60)}min</p>
    </div>
  ` : ''}
  </figure>
</div>

    <div class="flex gap-3 mt-4 items-center">
      <img src = ${cards.authors[0].profile_picture} class = "w-10 h-10 rounded-[40px]"/>
      <h4 class ="font-bold">${cards.title} </h4>
      </div>
      <div class = "flex gap-2 items-center"> 
      <h5 class = "text-sm text text-gray-500 ml-14 mt-2 mb-2">${cards.authors[0].profile_name}</h5>
      <div>
        ${cards.authors[0].verified ? '<i class="fas fa-check-circle" style="color: #0255e3;"></i>' : ''}
    </div>

      </div>
      <h5 class = "text-sm text text-gray-500 ml-14 mb-2">${cards.others.views}</h5>
    </div>
    `
        cardContainer.appendChild(div);

    });
    console.log(cards)


}

handleCategory();
handleCategoryId(1000);

















