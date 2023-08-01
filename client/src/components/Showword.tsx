import { dataProps } from "./interface";


const Showword = ({some,num}:dataProps) => {
      
    function decodingLast(msg: string, num: number): string {
        const newlist: string[] = [];
    
        for (let i = 0; i < msg.length; i++) {
            const newmsg: number = msg.charCodeAt(i);
            let cezr: number = newmsg + num;
            if (cezr > 90) {
                const z: number = cezr - 90;
                const cznum: number = 65 + z;
                newlist.push(String.fromCharCode(cznum));
            } else {
                newlist.push(String.fromCharCode(cezr));
            }
        }
    
        const decoded_msg: string = newlist.join('');
        return decoded_msg;
    }
    
    // Example usage:
    const decodedMessage: string = decodingLast(some, num);
    // console.log(decodedMessage);
    
    return (
        <>
            <p>{decodedMessage}</p>
        </>
    )
}

export default Showword