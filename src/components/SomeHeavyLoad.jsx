
const SomeHeavyLoad = () =>{

    function abc(){
        let index;
        for (index = 0; index < 1000000000; index++) {
        
        }
        return index;
    }

    let value = abc();

    return(
        <>
        Data is coming from SomeHeavyLoad {value}
        </>
    )


}

export default SomeHeavyLoad