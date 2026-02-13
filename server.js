const app = require("./src/app") 

//df

app.listen(3000,()=>{  // server ko start kiye 
    console.log("Server running on Port 3000")
})
// node server.js iss se chala skte h server ko ya package.json me jaker naya scrip daal skte h dev naam ka jo sirf development k time use hoga npx nodemon server.js npx execute kerta h kisi bhi package ko iss line se hoga ki hm nodemin k help se server chalu ker rhe h aur jb bhi change kerenge to automatically usko run kareyega
// development time npm run dev 
// production time npm run start --> no restarting on update