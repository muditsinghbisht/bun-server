function loopBackFunction() {
    let x = 1;
    for(let i=0; i<100000000; i++) {
        x = x * (x+1);
    }
    console.log(x);
}

loopBackFunction();