const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
		characters: [],
		planets: [],
		vehicles:[]
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      fetchingCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStore({
				characters: data.results
			})
			})
			.catch((error) => console.log(error));
      },
	  fetchingPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStore({
				planets: data.results
			})
			})
			.catch((error) => console.log(error));
      },
	  fetchingVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStore({
				vehicles: data.results
			})
			})
			.catch((error) => console.log(error));
      },


      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      addFavorite: (favoriteName)=>{
        let newFavorites = getStore().favorites;
        console.log()
				let found = newFavorites.find(item => item == favoriteName);
				if (found) {
					newFavorites = newFavorites.filter(item => item != favoriteName);
				} else {
					newFavorites = [...newFavorites, favoriteName];
				}
				setStore({favorites: newFavorites });
        console.log(newFavorites)
      }, 
      removeFav: (fav)=>{
        let dFav = getStore().favorites;
        let remove = dFav.filter((item)=>item!==fav)
        setStore({favorites: remove});
      }
      
    },
    
  };
};

export default getState;
