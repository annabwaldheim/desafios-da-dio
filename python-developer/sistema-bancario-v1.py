extrato=''
LIMITE_DIARIO=3
LIMITE_SAQUE=500
saldo=0
num_saque_dia=0
opcao=''

while opcao!='q':
    opcao=input('''
    menu

    [d] - depositar
    [s] - sacar
    [e] - gerar extrato
    [q] - sair

    ''')
    if opcao=='d':
        valor_deposito=float(input('Insira o valor do depósito:\t'))
        if valor_deposito>0:
            extrato+= f'Depósito: {saldo:.2f}'
            saldo+=valor_deposito
            extrato+=f' + {valor_deposito:.2f} = {saldo:.2f}\n'
        else:
            print('Só é possível depositar valores positivos.')
    elif opcao=='s':
        if num_saque_dia<3:
            valor_saque=float(input('Insira o valor do saque:\t'))
            while valor_saque>500:
                print('O valor ultrapassa o máximo de R$500,00 por saque.')
                valor_saque=float(input('Insira o valor do saque:\t'))
            if valor_saque>0:
                if saldo>valor_saque:
                    extrato+= f'Saque: {saldo:.2f}'
                    saldo-=valor_saque
                    extrato+=f' - {valor_saque:.2f} = {saldo:.2f}\n'
                    num_saque_dia+=1
                else:
                    print('Saldo insuficiente.')
            else:
                print('Só é possível sacar valores positivos.')
        else:
            print('O limite de saques diários já foi atingido.')
    elif opcao=='e':
        extrato+=f'Saldo: {saldo:.2f}\n'
        print(extrato)
    else:
        print('Opção inválida.')