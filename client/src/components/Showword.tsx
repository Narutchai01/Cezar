
import { dataProps } from './interface'

const Showword = ({ some, num }: dataProps) => {

    // const upSome:string = some.toUpperCase
    const newsome = some.split("");
    newsome = newsome.to
    for (let i = 0; i < newsome.length; i++) {
        const so = newsome[i].charCodeAt(0) - num;
        // console.log(so);
        newsome[i] = String.fromCharCode(so);
        console.log(newsome);
        
        
    }

    return (
        <>
            <h1 className='text-5xl mt-20 font-bold text-error '>{newsome}</h1>
        </>
    )
}

export default Showword
