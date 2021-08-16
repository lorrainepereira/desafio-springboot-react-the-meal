export type Consumer<Param> = (t: Param) => void;
export type BiConsumer<ParamA, ParamB> = (t: ParamA, u: ParamB) => void;
export type OptionalBiConsumer<ParamA, ParamB> = (t: ParamA, u?: ParamB) => void;
export type OptionalAllBiConsumer<ParamA, ParamB> = (t?: ParamA, u?: ParamB) => void;

export type Function<Param, Return> = (t: Param) => Return;
export type BiFunction<ParamA, ParamB, Return> = (t: ParamA, u: ParamB) => Return;

export type UnaryOperator<ParamReturn> = Function<ParamReturn, ParamReturn>;

export type Predicate<Param> = (t: Param) => boolean;
export type BiPredicate<ParamA, ParamB> = (t: ParamA, u: ParamB) => boolean;

export type Supplier<Return> = () => Return;
export type Runnable = () => void;

export type Comparable<Param> = (t: Param, u: Param) => number;

/**
 * <p>
 *   Funcao para ser usadas como fallBack em paramentos opcionais
 * <p>
 * <b>exemplo</b>
 * <pre>
 *   function foo(funA: Consumer<string> = ConsumerImpl): void {
 *     // voce executar ela sem se preocupar se o funA esta undefined
 *     funA('ggwp')
 *   }
 * </pre>
 * @param _
 */
export const ConsumerImpl: Consumer<any> = (_) => {};

/**
 * <p>
 *   Funcao para ser usadas como fallBack em paramentos opcionais
 * <p>
 * <b>exemplo</b>
 * <pre>
 *   function foo(funA: Runnable = RunnableImpl): void {
 *     // voce executar ela sem se preocupar se o funA esta undefined
 *     funA()
 *   }
 * </pre>
 */
export const RunnableImpl: Runnable = () => {};

/**
 * <p>
 *   Funcao para ser usadas como fallBack em paramentos opcionais
 * <p>
 * <b>exemplo</b>
 * <pre>
 *   function foo(funA: Supplier<string> = SupplierImpl('Vai retornar isto como default')): void {
 *     // voce executar ela sem se preocupar se o funA esta undefined
 *     funA();
 *   }
 * </pre>
 */
export const SupplierImpl = <Return>(r: Return) => () => r;
