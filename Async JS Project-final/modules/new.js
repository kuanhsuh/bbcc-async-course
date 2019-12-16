
class NewPage {
  constructor() {
    this.post;
  }

  events() {
    this.fetchData();
  }


  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.data = data.slice(0, 10)
        this.displayPosts();
      })
  }

  displayPosts() {
    this.data = this.data.map((data) => (
      `
      <div class="mb-6">
      <h2 class="font-bold font-medium text-4xl">Post#1: ea molestias quasi exercitationem repellat qui ipsa sit aut
      </h2>
      <p class="text-2xl font-light text-gray-600 mb-5">est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
        beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam no</p>
      <hr class="border-gray-400 border-t">
    </div>
    <!-- Post -->
    <a href="#" class="py-4 px-8 border border-gray-700 rounded text-gray-700 mr-4">Go Back</a>
    <a href="#" class="py-4 px-8 border border-red-400 rounded text-red-400 mr-4">Delete</a>
    <a href="#" class="py-4 px-8  bg-teal-400 rounded text-white">Update</a>
      `
    ))
    this.appendPosts();
  }


  appendPosts() {
    document.querySelector("#posts").innerHTML = this.data.join(" ");
  }
}

var newpage = new NewPage();