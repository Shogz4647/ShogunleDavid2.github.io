
fetch("https://dummyapi.io/data/v1/user", { method : "GET", headers: { 'app-id' : "64fafe48ef48e786faab335b" }})
.then((response) => response.json())
.then((response => {
    const data = response.data
    console.log(data)
    let user_details = ""
    data.forEach(element => {
        user_details += `
        <div class = "user-card-section"</div>
        <div class="user-card">
            <div class="user-img">
                <img src="${element.picture}" alt="">
            </div>
            <div class = "username">
                <h4 class = "firstname" >${element.firstName}</h4>
                <h4 class = "lastname">${element.lastName}</h4>
            </div>        
            <p class = "id">${element.id}</p>
            <div class="social-handle">
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
            </div>
        </div>
    </div>    
        `
        
    });
    document.querySelector(".user-card-section").innerHTML = user_details
}))
