import { dataProps } from "./interface";


const Showword = ({ some, num }: dataProps) => {

    function decodingLast(msg: string, num: number): string {
        const newlist: string[] = [];

        for (let i = 0; i < msg.length; i++) {
            const newmsg = msg.charCodeAt(i);
            let cezr: number;

            if (num > 0) {
                cezr = newmsg + num;
                if (cezr > 90) {
                    const z = cezr - 90;
                    const cznum = 64 + z;
                    newlist.push(String.fromCharCode(cznum));
                } else {
                    newlist.push(String.fromCharCode(cezr));
                }
            } else if (num < 0) {
                cezr = newmsg - num;
                if (cezr > 90) {
                    const z = cezr - 90;
                    const cznum = 64 + z;
                    newlist.push(String.fromCharCode(cznum));
                } else {
                    newlist.push(String.fromCharCode(cezr));
                }
            } else {
                newlist.push(msg[i]);
            }
        }

        const decoded_msg = newlist.join('');
        return decoded_msg;
    }

    // Example usage:
    const decodedMessage: string = decodingLast(some, num);
    // console.log(decodedMessage);


    return (
        <>
            <p className="mt-10 text-5xl font-bold text-white">{decodedMessage}</p>
        </>
    )
}

export default Showword