import { useState } from 'react'
import {formInput } from './interface'
import Showword from './Showword'

interface result {
    words: string,
    cesa: number
}

const From = () => {

    const [text, setText] = useState<formInput>({
        words: "",
        cesa: 0
    })
    const [result, setResult] = useState<result[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult([text]);
        
    }

    // console.log(result);



    return (
        <>
            <div className="flex flex-col justify-center items-center h-[500px]">
                <h1 className="text-3xl font-bold text-success ">Cezar</h1>
                <form className="flex flex-col gap-10 mt-10" onSubmit={handleSubmit}>
                    <input type="text" className="input input-bordered input-success w-full max-w-xs" name="words" onChange={handleChange} />
                    <input type="number" className="input input-bordered input-success w-full max-w-xs" name="cesa" onChange={handleChange} />
                    <button type='submit' className="btn btn-success">Summit</button>
                </form>
                <Showword  some={result.words || ''} num={result.cesa} />
            </div>
        </>
    )
}

export default From
