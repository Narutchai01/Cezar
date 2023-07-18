import { useState, FormEvent, ChangeEvent } from 'react'
import { formInput } from './interface'
import Showword from './Showword'


const From = () => {

    const [text, setText] = useState<formInput>({
        words: "",
        cesa: 0
    })
    const [result, setResult] = useState<formInput>({
        words: "",
        cesa: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "cesa") {
            setText({
                ...text,
                [name]: parseInt(value)
            })
        }
        else {
            setText({
                ...text,
                [name]: value
            })
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(text);

    }

    // console.log(result);



    return (
        <>
            <div className="flex flex-col justify-center items-center h-[700px]">
                <h1 className="text-3xl font-bold text-success ">Cezar</h1>
                <form className="flex flex-col gap-10 mt-10" onSubmit={handleSubmit}>
                    <div>
                        <p className='text-xl font-bold'>Enter word</p>
                        <input type="text" placeholder='ใส่คำที่นี่' className="input input-bordered input-success w-full max-w-xs" name="words" onChange={handleChange} />
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Number</p>
                    <input type="number" placeholder='ใส่เลขที่นี่' className="input input-bordered input-success w-full max-w-xs" name="cesa" onChange={handleChange} />
                    </div>
                    <button type='submit' className="btn btn-success text-xl font-bold">Summit</button>
                </form>
                <Showword some={result.words || ''} num={result.cesa} />
            </div>
        </>
    )
}

export default From
