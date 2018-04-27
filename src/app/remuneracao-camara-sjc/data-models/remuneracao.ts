export class Remuneracao {
  constructor(
    public nome: string,
    public cargo: string,
    public salario_base: number,
    public plano_carreira: number,
    public gratificacao: number,
    public beneficio: number,
    public abono: number,
    public adiantamento: number,
    public ferias: number,
    public decimo_terceiro: number,
    public abatimento: number,
    public descontos: number,
    public salario_bruto: number,
    public salario_liquido: number
  ) {}
}
