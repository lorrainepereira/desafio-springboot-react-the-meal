/**
 * OnlyPartial
 * <p>
 *   Deixe somente algumas propriedades de {@link T} opcionais
 * </p>
 * <p>
 *   <b>Exemplo</b>
 *   <pre>
 *     type Pagina = {
 *       numero: number;
 *       totalPagina: number;
 *       totalElementos: number;
 *     }
 *     type PaginaOpcional = OnlyPartial<Pagina, 'totalPagina' | 'totalElementos'>;
 *
 *     // PaginaOpcional vai ser equivalente ao seguinte type
 *     {
 *       numero: number;
 *       totalPagina?: number
 *       totalElementos?: number
 *     }
 *   </pre>
 * </p>
 */
export type OnlyPartial<T extends object, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
