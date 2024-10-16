
fetch('https://jsonplaceholder.typicode.com/posts')   // way - 1 to fetch data ..
      .then(response => response.json())
      .then(data => hadnleApiData(data))
      .catch(erro => console.log('error'))



async function fetchData() {                            //way - 2 to fetch data with async await ..
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error(`network ${response.statusText}`); // if api has any problem to load it can show what happens!
                }
                let data = await response.json();
                displayData(data);

                
            }
            catch (error) {
                console.error(`error ${error}`); // and catch error throw error only when this function fail to fetch ..
            }
        }
        fetchData();

async function displayData(param) {
            let first = await param[0];
            console.log(first);
        }
 




        let asyncApiWithArrow =async () => {     // async with arrow function ..
            try{
                  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
                  let data =await res.json();
                  newApiData(data);
            }
            catch(error){
                  console.log(`error name ${error}`)
            }
        }

        asyncApiWithArrow();

        function newApiData(param) {
            console.log(param[2]);
        }
