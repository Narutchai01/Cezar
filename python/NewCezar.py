def encoder(input, offset):
    temp = input + offset
    if 58 < temp < 64:
        temp += 7
    if temp > 65:
        temp = temp % 43
    return temp + 48
msg = str(input('entre word: '))

msg.upper


for i in range(len(msg)):
    print(chr(encoder(ord(msg[i]),5)),end='')

