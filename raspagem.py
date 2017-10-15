from urllib.request import urlopen
from bs4 import BeautifulSoup
import requests


class Raspagem:
    def __init__(self):
        self.html = urlopen(
            "http://portal.camarasjc.sp.gov.br:8080/"
            "cmsjc/websis/portal_transparencia/financeiro/contas_publicas/"
            "index.php?consulta=../lei_acesso/lai_remuneracoes")
        self.bsObj = BeautifulSoup(html, "html.parser")
        self.nameList = bsObj.findAll("tr")

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

    def raspatodos(self):
        titulo = self.cabecalho()
        for name in nameList:
            x = 0
            print()
            for n in name:
                if "" not in n:
                    print(titulo[x], ": ", n.getText())
                    x = x + 1
