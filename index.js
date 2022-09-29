const callback = (entries) => {
    console.log(entries);
}

const options = {
    threshold: 1
};

const vigilante = new IntersectionObserver(callback,options);
vigilante.observe(div)