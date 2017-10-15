# Este web scrapper lista todos as remunerações da Câmara Municipal de São José
# dos Campos do mês anterior ao atual. Os dados podem ser utilizados para
# identificar remuneração indevida ou exorbitante, conforme tempo de
# experiência, cargo e responsabilidade de cada profissional.
#
# O link de acesso é:
# <http://portal.camarasjc.sp.gov.br:8080/cmsjc/websis/portal_transparencia/financeiro/contas_publicas/index.php?consulta=../lei_acesso/lai_remuneracoes>

from urllib.request import urlopen
from bs4 import BeautifulSoup
import requests



html = urlopen("http://portal.camarasjc.sp.gov.br:8080/cmsjc/websis/portal_transparencia/financeiro/contas_publicas/index.php?consulta=../lei_acesso/lai_remuneracoes")
bsObj = BeautifulSoup(html, "html.parser")


nameList = bsObj.findAll("tr")


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

for name in nameList:
    x = 0
    print()
    for n in name:
        if "" not in n:
            print(titulo[x], ": ", n.getText())
            x = x + 1


