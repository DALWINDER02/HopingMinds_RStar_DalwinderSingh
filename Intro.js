function Module1(Module2)
{
    setTimeout(() =>{

        console.log("Module1 Found")
    },2000);
    Module2()
    
}

function Module2(Module3)
{
    setTimeout(() => {
        console.log("Module2 Found");
    },3000)
    Module3()
}

function Module3()
{
    setTimeout(() => {
        console.log("Module3 Found");
    },4000)

}

Module1(()=>{
    Module2(() => {
        Module3()
    })
})


