const btndmr = document.querySelector("#dmr");

btndmr.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	btndmr.classList.toggle("active");
	 store(body.classList.contains("active"));

});

  load();

  function load(){
    const darkmode = localStorage.getItem("dmr");

    if (!darkmode){
      store("false");
    }else if(darkmode == "true"){
      body.classList.add("dark");
    }
  }

  function store(value){
     localStorage.setItem("dark", value);
  }

