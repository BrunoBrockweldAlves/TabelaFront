import { Produto } from '../app/Produto.model'

export interface Tabela {
    codigoTabela: string;
    produtos: Produto[];
    vigenciaInicio: string;
    vigenciaFim: string;
}
