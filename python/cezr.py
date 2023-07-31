def encoding(msg):

    num = 20

    newlist = []

    for i in range(len(msg)):
        newmsg = ord(msg[i])
        cezr = newmsg - num
        if cezr < 65:
            z = 65 - cezr
            cznum = 90 - z
            newlist.append(chr(cznum))       
        else:
            newlist.append(chr(cezr))

    decoded_msg = "".join(newlist)
    print(decoded_msg)


    print(newlist)


def decoding(msg):
    num = 20 
    newlist = []

    for i in range(len(msg)):
        newmsg = ord(msg[i])
        cezr = newmsg + num
        # print(cezr)
        if cezr > 90:
            z = cezr - 90
            # print(z)
            cznum = 65 + z
            newlist.append(chr(cznum))
        else:
            newlist.append(chr(cezr))
    print(newlist)


encoding('WELCOME')
def decoding_last(msg, num):
    newlist = []
    for i in range(len(msg)):
        newmsg = ord(msg[i])
        cezr = newmsg + num
        if cezr > 90:
            z = cezr - 90
            cznum = 65 + z
            newlist.append(chr(cznum))
        else:
            newlist.append(chr(cezr))

    decoded_msg = "".join(newlist)
    return decoded_msg

# Example usage:
message = "CJQHTRJ"
shift_amount = 20
decoded_message = decoding_last(message, shift_amount)
print(decoded_message)

encoding('WELCOMETOACSFIRSTMEET')