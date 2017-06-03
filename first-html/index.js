console.log("Hi there!");

/*"""function sleep(miliseconds){
"""    let startTime = Date.now();
//"""    while(Date.now() < startTime + miliseconds);
"""}*/
for(let i=0; i<10;i++){
    console.log('Hi number '++i)
}
sleep(2000);

console.log('Hi there after sleep');