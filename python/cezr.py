def endcodding(msg):

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


endcodding('WELCOME')
decoding('CJQHTRJ')