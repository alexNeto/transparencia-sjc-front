from urllib.request import urlopen
from bs4 import BeautifulSoup
import requests


class Raspagem:
    def __init__(self):
        self.html = urlopen(
            "http://portal.camarasjc.sp.gov.br:8080/"
            "cmsjc/websis/portal_transparencia/financeiro/contas_publicas/"
            "index.php?consulta=../lei_acesso/lai_remuneracoes")
        self.bsObj = BeautifulSoup(self.html, "html.parser")
        self.nameList = self.bsObj.findAll("tr")
        self.data = self.bsObj.find("h5")

    def cabecalho(self):
        titulo = ["Nome do Servidor",
                  "Cargo",
                  "Salário Base",
                  "Plano de Carreira",
                  "Gratificações",
                  "Benefícios",
                  "Abono",
                  "Adiantamento Salarial",
                  "Férias",
                  "Décimo Terceiro",
                  "Abatimento",
                  "Descontos",
                  "Salário Bruto",
                  "Salário Líquido"
                  ]
        return titulo

    '''
    raspagem.raspatodos()
    phonebook = {}
    phonebook2 = {"key": "value"}
    for i in range(10):
        phonebook[i] = phonebook2
        phonebook["Jack"] = 938377264
        phonebook["Jill"] = i
    '''

    def raspatodos(self):
        dados = {}
        titulo = self.cabecalho()
        for nome in titulo:
            individual = {nome: 0}
        for i in range(10):
            dados[i] = individual
            dados["Jack"] = 938377264
            dados["Jill"] = i
        return dados

    '''
        dados = {}
        titulo = self.cabecalho()
        i = 0
        for name in self.nameList:
            individual = {}
            x = 0
            for n in name:
                if "" not in n:
                    individual[x] = {n.getText()}
                    x = x + 1
                dados[i] = individual
                i += 1
        return dados
    '''

    def pegadata(self):
        data = self.data.getText()
        data = data[20:]
        return data
