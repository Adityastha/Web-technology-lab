// Get the form element with the id "myform"
var form = document.getElementById("myform")

// Add a 'submit' event listener to the form
form.addEventListener('submit',function(e){
    e.preventDefault() // Prevent the default form submission behavior

     // Get the value entered in the input field with the id "search"
        var search =document.getElementById("search").value

         // Remove spaces from the search input to create the originalName
        var originalName= search.split(' ').join('')

         // Clear the content of the element with the id "result"
        document.getElementById("result").innerHTML = ""

        // Fetch data from the GitHub API using the originalName
        fetch("https://api.github.com/users/"+originalName)
        .then((result) => {
            // if(result.status==200){
                console.log(result)
            
            if(result.ok){
                return result.json()
            }
            else{
                alert(`${result.status} : Account not found`)
            }
        }) // Parse the response as JSON

        //  this .then only executes if the about .then returns sth
        .then((data) => {
            console.log(data) // Log the fetched data to the console

            // Populate the element with id "result" with the fetched user data
            document.getElementById("result").innerHTML = `
            <div class=rbox>
            <img class="avatarSize" src="${data.avatar_url}"/>
            <div class="fontsize">
              <p>Name: ${data.name}</p>
              <p>Username: ${data.login}</p>
              <p>Followers: ${data.followers}</p>
              <p>Following: ${data.following}</p>
              <p>Location: ${data.location}</p>
              <p>Bio: ${data.bio}</p>
            </div>
            </div>
            `
        })
})