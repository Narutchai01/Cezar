
import { dataProps } from './interface'

const Showword = ({ some, num }: dataProps) => {

    const newsome = some.split("");
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
