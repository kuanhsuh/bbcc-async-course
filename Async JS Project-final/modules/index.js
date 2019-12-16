
class HomePage {
  constructor() {
    this.data;
    this.searchResults;
    this.postElement = document.querySelector("#posts");
    this.searchPostInput = document.querySelector('#searchPost');
    this.searchResultUl = document.querySelector('#searchResult');
    this.events();
  }

  events() {
    this.fetchData();
    this.searchPostInput.addEventListener("keyup", () => this.displayDropDown());
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.data = data.slice(0, 10)
        this.displayPosts();
      })
  }

  displayPosts() {
    this.data = this.data.map((data) => (
      `<div>
        <h2 class="font-bold font-medium text-4xl">Post#${data.id}: ${data.title}</h2>
        <p class="text-2xl font-light text-gray-600 mb-5">${data.body}</p>
        <div class="mb-4 text-right"><a href="/show.html?post=${data.id}" class="px-4 py-2 border inline-block rounded border-teal-600 text-teal-600">View This Post</a></div>
        <hr class="border-gray-400 border-t">
      </div>`
    ))
    this.postElement.innerHTML = this.data.join(" ");
  }

  displayDropDown() {
    let dropdownClassList = this.searchPostInput.nextElementSibling.nextElementSibling.classList
    if (this.searchPostInput.value.length > 0) {
      dropdownClassList.remove("hidden")
      console.log(this.searchPostInput.value)
      this.fetchSearch(this.searchPostInput.value)
    } else {
      dropdownClassList.add("hidden")
    }
  }

  fetchSearch(searchTxt) {
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTxt}`)
      .then(response => response.json())
      .then(data => {
        this.searchResults = data.slice(0, 5)
        this.appendSearchResult()
      })
  }
  appendSearchResult() {
    this.searchResults = this.searchResults.map((data) => (
      `<li class="p-2 border border-gray-200 hover:bg-gray-100">
          ${data.title}
      </li>`
    ))
    this.searchResultUl.innerHTML = this.searchResults.join(" ");
  }

}

var homepage = new HomePage();