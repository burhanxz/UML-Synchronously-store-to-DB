/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Interaction Operator Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * InteractionOperatorKind is an enumeration designating the different kinds of operators of CombinedFragments. The InteractionOperand defines the type of operator of a CombinedFragment.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getInteractionOperatorKind()
     * @model
     * @generated
     * @enum
     * @property {uml.InteractionOperatorKind} SEQ
     * The '<em><b>Seq</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #SEQ_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} ALT
     * The '<em><b>Alt</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ALT_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} OPT
     * The '<em><b>Opt</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #OPT_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} BREAK
     * The '<em><b>Break</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #BREAK_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} PAR
     * The '<em><b>Par</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PAR_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} STRICT
     * The '<em><b>Strict</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #STRICT_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} LOOP
     * The '<em><b>Loop</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #LOOP_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} CRITICAL
     * The '<em><b>Critical</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #CRITICAL_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} NEG
     * The '<em><b>Neg</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #NEG_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} ASSERT
     * The '<em><b>Assert</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ASSERT_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} IGNORE
     * The '<em><b>Ignore</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #IGNORE_VALUE
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind} CONSIDER
     * The '<em><b>Consider</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #CONSIDER_VALUE
     * @generated
     * @ordered
     * @property {number} SEQ_VALUE
     * The '<em><b>Seq</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind seq designates that the CombinedFragment represents a weak sequencing between the behaviors of the operands.
     * <!-- end-model-doc -->
     * @see #SEQ
     * @model name="seq"
     * @generated
     * @ordered
     * @property {number} ALT_VALUE
     * The '<em><b>Alt</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind alt designates that the CombinedFragment represents a choice of behavior. At most one of the operands will be chosen. The chosen operand must have an explicit or implicit guard expression that evaluates to true at this point in the interaction. An implicit true guard is implied if the operand has no guard.
     * <!-- end-model-doc -->
     * @see #ALT
     * @model name="alt"
     * @generated
     * @ordered
     * @property {number} OPT_VALUE
     * The '<em><b>Opt</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind opt designates that the CombinedFragment represents a choice of behavior where either the (sole) operand happens or nothing happens. An option is semantically equivalent to an alternative CombinedFragment where there is one operand with non-empty content and the second operand is empty.
     * <!-- end-model-doc -->
     * @see #OPT
     * @model name="opt"
     * @generated
     * @ordered
     * @property {number} BREAK_VALUE
     * The '<em><b>Break</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind break designates that the CombinedFragment represents a breaking scenario in the sense that the operand is a scenario that is performed instead of the remainder of the enclosing InteractionFragment. A break operator with a guard is chosen when the guard is true and the rest of the enclosing Interaction Fragment is ignored. When the guard of the break operand is false, the break operand is ignored and the rest of the enclosing InteractionFragment is chosen. The choice between a break operand without a guard and the rest of the enclosing InteractionFragment is done non-deterministically.
     * <!-- end-model-doc -->
     * @see #BREAK
     * @model name="break"
     * @generated
     * @ordered
     * @property {number} PAR_VALUE
     * The '<em><b>Par</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind par designates that the CombinedFragment represents a parallel merge between the behaviors of the operands. The OccurrenceSpecifications of the different operands can be interleaved in any way as long as the ordering imposed by each operand as such is preserved.
     * <!-- end-model-doc -->
     * @see #PAR
     * @model name="par"
     * @generated
     * @ordered
     * @property {number} STRICT_VALUE
     * The '<em><b>Strict</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind strict designates that the CombinedFragment represents a strict sequencing between the behaviors of the operands. The semantics of strict sequencing defines a strict ordering of the operands on the first level within the CombinedFragment with interactionOperator strict. Therefore OccurrenceSpecifications within contained CombinedFragment will not directly be compared with other OccurrenceSpecifications of the enclosing CombinedFragment.
     * <!-- end-model-doc -->
     * @see #STRICT
     * @model name="strict"
     * @generated
     * @ordered
     * @property {number} LOOP_VALUE
     * The '<em><b>Loop</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind loop designates that the CombinedFragment represents a loop. The loop operand will be repeated a number of times.
     * <!-- end-model-doc -->
     * @see #LOOP
     * @model name="loop"
     * @generated
     * @ordered
     * @property {number} CRITICAL_VALUE
     * The '<em><b>Critical</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind critical designates that the CombinedFragment represents a critical region. A critical region means that the traces of the region cannot be interleaved by other OccurrenceSpecifications (on those Lifelines covered by the region). This means that the region is treated atomically by the enclosing fragment when determining the set of valid traces. Even though enclosing CombinedFragments may imply that some OccurrenceSpecifications may interleave into the region, such as with par-operator, this is prevented by defining a region.
     * <!-- end-model-doc -->
     * @see #CRITICAL
     * @model name="critical"
     * @generated
     * @ordered
     * @property {number} NEG_VALUE
     * The '<em><b>Neg</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind neg designates that the CombinedFragment represents traces that are defined to be invalid.
     * <!-- end-model-doc -->
     * @see #NEG
     * @model name="neg"
     * @generated
     * @ordered
     * @property {number} ASSERT_VALUE
     * The '<em><b>Assert</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind assert designates that the CombinedFragment represents an assertion. The sequences of the operand of the assertion are the only valid continuations. All other continuations result in an invalid trace.
     * <!-- end-model-doc -->
     * @see #ASSERT
     * @model name="assert"
     * @generated
     * @ordered
     * @property {number} IGNORE_VALUE
     * The '<em><b>Ignore</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind ignore designates that there are some message types that are not shown within this combined fragment. These message types can be considered insignificant and are implicitly ignored if they appear in a corresponding execution. Alternatively, one can understand ignore to mean that the message types that are ignored can appear anywhere in the traces.
     * <!-- end-model-doc -->
     * @see #IGNORE
     * @model name="ignore"
     * @generated
     * @ordered
     * @property {number} CONSIDER_VALUE
     * The '<em><b>Consider</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The InteractionOperatorKind consider designates which messages should be considered within this combined fragment. This is equivalent to defining every other message to be ignored.
     * <!-- end-model-doc -->
     * @see #CONSIDER
     * @model name="consider"
     * @generated
     * @ordered
     * @property {uml.InteractionOperatorKind[]} VALUES
     * A public read-only list of all the '<em><b>Interaction Operator Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum InteractionOperatorKind {
        
        /**
         * The '<em><b>Seq</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #SEQ_VALUE
         * @generated
         * @ordered
         */
        SEQ, 
        /**
         * The '<em><b>Alt</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ALT_VALUE
         * @generated
         * @ordered
         */
        ALT, 
        /**
         * The '<em><b>Opt</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #OPT_VALUE
         * @generated
         * @ordered
         */
        OPT, 
        /**
         * The '<em><b>Break</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #BREAK_VALUE
         * @generated
         * @ordered
         */
        BREAK, 
        /**
         * The '<em><b>Par</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PAR_VALUE
         * @generated
         * @ordered
         */
        PAR, 
        /**
         * The '<em><b>Strict</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #STRICT_VALUE
         * @generated
         * @ordered
         */
        STRICT, 
        /**
         * The '<em><b>Loop</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #LOOP_VALUE
         * @generated
         * @ordered
         */
        LOOP, 
        /**
         * The '<em><b>Critical</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #CRITICAL_VALUE
         * @generated
         * @ordered
         */
        CRITICAL, 
        /**
         * The '<em><b>Neg</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #NEG_VALUE
         * @generated
         * @ordered
         */
        NEG, 
        /**
         * The '<em><b>Assert</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ASSERT_VALUE
         * @generated
         * @ordered
         */
        ASSERT, 
        /**
         * The '<em><b>Ignore</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #IGNORE_VALUE
         * @generated
         * @ordered
         */
        IGNORE, 
        /**
         * The '<em><b>Consider</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #CONSIDER_VALUE
         * @generated
         * @ordered
         */
        CONSIDER
    }

    /** @ignore */
    export class InteractionOperatorKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Seq</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind seq designates that the CombinedFragment represents a weak sequencing between the behaviors of the operands.
         * <!-- end-model-doc -->
         * @see #SEQ
         * @model name="seq"
         * @generated
         * @ordered
         */
        public static SEQ_VALUE = 0;

        /**
         * The '<em><b>Alt</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind alt designates that the CombinedFragment represents a choice of behavior. At most one of the operands will be chosen. The chosen operand must have an explicit or implicit guard expression that evaluates to true at this point in the interaction. An implicit true guard is implied if the operand has no guard.
         * <!-- end-model-doc -->
         * @see #ALT
         * @model name="alt"
         * @generated
         * @ordered
         */
        public static ALT_VALUE = 1;

        /**
         * The '<em><b>Opt</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind opt designates that the CombinedFragment represents a choice of behavior where either the (sole) operand happens or nothing happens. An option is semantically equivalent to an alternative CombinedFragment where there is one operand with non-empty content and the second operand is empty.
         * <!-- end-model-doc -->
         * @see #OPT
         * @model name="opt"
         * @generated
         * @ordered
         */
        public static OPT_VALUE = 2;

        /**
         * The '<em><b>Break</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind break designates that the CombinedFragment represents a breaking scenario in the sense that the operand is a scenario that is performed instead of the remainder of the enclosing InteractionFragment. A break operator with a guard is chosen when the guard is true and the rest of the enclosing Interaction Fragment is ignored. When the guard of the break operand is false, the break operand is ignored and the rest of the enclosing InteractionFragment is chosen. The choice between a break operand without a guard and the rest of the enclosing InteractionFragment is done non-deterministically.
         * <!-- end-model-doc -->
         * @see #BREAK
         * @model name="break"
         * @generated
         * @ordered
         */
        public static BREAK_VALUE = 3;

        /**
         * The '<em><b>Par</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind par designates that the CombinedFragment represents a parallel merge between the behaviors of the operands. The OccurrenceSpecifications of the different operands can be interleaved in any way as long as the ordering imposed by each operand as such is preserved.
         * <!-- end-model-doc -->
         * @see #PAR
         * @model name="par"
         * @generated
         * @ordered
         */
        public static PAR_VALUE = 4;

        /**
         * The '<em><b>Strict</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind strict designates that the CombinedFragment represents a strict sequencing between the behaviors of the operands. The semantics of strict sequencing defines a strict ordering of the operands on the first level within the CombinedFragment with interactionOperator strict. Therefore OccurrenceSpecifications within contained CombinedFragment will not directly be compared with other OccurrenceSpecifications of the enclosing CombinedFragment.
         * <!-- end-model-doc -->
         * @see #STRICT
         * @model name="strict"
         * @generated
         * @ordered
         */
        public static STRICT_VALUE = 5;

        /**
         * The '<em><b>Loop</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind loop designates that the CombinedFragment represents a loop. The loop operand will be repeated a number of times.
         * <!-- end-model-doc -->
         * @see #LOOP
         * @model name="loop"
         * @generated
         * @ordered
         */
        public static LOOP_VALUE = 6;

        /**
         * The '<em><b>Critical</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind critical designates that the CombinedFragment represents a critical region. A critical region means that the traces of the region cannot be interleaved by other OccurrenceSpecifications (on those Lifelines covered by the region). This means that the region is treated atomically by the enclosing fragment when determining the set of valid traces. Even though enclosing CombinedFragments may imply that some OccurrenceSpecifications may interleave into the region, such as with par-operator, this is prevented by defining a region.
         * <!-- end-model-doc -->
         * @see #CRITICAL
         * @model name="critical"
         * @generated
         * @ordered
         */
        public static CRITICAL_VALUE = 7;

        /**
         * The '<em><b>Neg</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind neg designates that the CombinedFragment represents traces that are defined to be invalid.
         * <!-- end-model-doc -->
         * @see #NEG
         * @model name="neg"
         * @generated
         * @ordered
         */
        public static NEG_VALUE = 8;

        /**
         * The '<em><b>Assert</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind assert designates that the CombinedFragment represents an assertion. The sequences of the operand of the assertion are the only valid continuations. All other continuations result in an invalid trace.
         * <!-- end-model-doc -->
         * @see #ASSERT
         * @model name="assert"
         * @generated
         * @ordered
         */
        public static ASSERT_VALUE = 9;

        /**
         * The '<em><b>Ignore</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind ignore designates that there are some message types that are not shown within this combined fragment. These message types can be considered insignificant and are implicitly ignored if they appear in a corresponding execution. Alternatively, one can understand ignore to mean that the message types that are ignored can appear anywhere in the traces.
         * <!-- end-model-doc -->
         * @see #IGNORE
         * @model name="ignore"
         * @generated
         * @ordered
         */
        public static IGNORE_VALUE = 10;

        /**
         * The '<em><b>Consider</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionOperatorKind consider designates which messages should be considered within this combined fragment. This is equivalent to defining every other message to be ignored.
         * <!-- end-model-doc -->
         * @see #CONSIDER
         * @model name="consider"
         * @generated
         * @ordered
         */
        public static CONSIDER_VALUE = 11;

        /**
         * An array of all the '<em><b>Interaction Operator Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : InteractionOperatorKind[] { if(InteractionOperatorKind_$WRAPPER.VALUES_ARRAY == null) InteractionOperatorKind_$WRAPPER.VALUES_ARRAY = [InteractionOperatorKind.SEQ, InteractionOperatorKind.ALT, InteractionOperatorKind.OPT, InteractionOperatorKind.BREAK, InteractionOperatorKind.PAR, InteractionOperatorKind.STRICT, InteractionOperatorKind.LOOP, InteractionOperatorKind.CRITICAL, InteractionOperatorKind.NEG, InteractionOperatorKind.ASSERT, InteractionOperatorKind.IGNORE, InteractionOperatorKind.CONSIDER]; return InteractionOperatorKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Interaction Operator Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<InteractionOperatorKind> { if(InteractionOperatorKind_$WRAPPER.VALUES == null) InteractionOperatorKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return InteractionOperatorKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : InteractionOperatorKind {
            for(let i = 0; i < InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.InteractionOperatorKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Interaction Operator Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.InteractionOperatorKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.InteractionOperatorKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.InteractionOperatorKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Interaction Operator Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.InteractionOperatorKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : InteractionOperatorKind {
            for(let i = 0; i < InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.InteractionOperatorKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : InteractionOperatorKind {
            switch((value)) {
            case 0 /* SEQ_VALUE */:
                return InteractionOperatorKind.SEQ;
            case 1 /* ALT_VALUE */:
                return InteractionOperatorKind.ALT;
            case 2 /* OPT_VALUE */:
                return InteractionOperatorKind.OPT;
            case 3 /* BREAK_VALUE */:
                return InteractionOperatorKind.BREAK;
            case 4 /* PAR_VALUE */:
                return InteractionOperatorKind.PAR;
            case 5 /* STRICT_VALUE */:
                return InteractionOperatorKind.STRICT;
            case 6 /* LOOP_VALUE */:
                return InteractionOperatorKind.LOOP;
            case 7 /* CRITICAL_VALUE */:
                return InteractionOperatorKind.CRITICAL;
            case 8 /* NEG_VALUE */:
                return InteractionOperatorKind.NEG;
            case 9 /* ASSERT_VALUE */:
                return InteractionOperatorKind.ASSERT;
            case 10 /* IGNORE_VALUE */:
                return InteractionOperatorKind.IGNORE;
            case 11 /* CONSIDER_VALUE */:
                return InteractionOperatorKind.CONSIDER;
            }
            return null;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ value;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ __name;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ literal;

        constructor(protected _$ordinal : number, protected _$name : string, value, name, literal) {
            this.value = 0;
            this.__name = null;
            this.literal = null;
            this.value = value;
            this.__name = name;
            this.literal = literal;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getValue() : number {
            return this.value;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getName() : string {
            return this.__name;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getLiteral() : string {
            return this.literal;
        }

        /**
         * Returns the literal value of the enumerator, which is its string representation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public toString() : string {
            return this.literal;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    InteractionOperatorKind["__class"] = "uml.InteractionOperatorKind";
    InteractionOperatorKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    InteractionOperatorKind["_$wrappers"] = [new InteractionOperatorKind_$WRAPPER(0, "SEQ", 0, "seq", "seq"), new InteractionOperatorKind_$WRAPPER(1, "ALT", 1, "alt", "alt"), new InteractionOperatorKind_$WRAPPER(2, "OPT", 2, "opt", "opt"), new InteractionOperatorKind_$WRAPPER(3, "BREAK", 3, "break", "break"), new InteractionOperatorKind_$WRAPPER(4, "PAR", 4, "par", "par"), new InteractionOperatorKind_$WRAPPER(5, "STRICT", 5, "strict", "strict"), new InteractionOperatorKind_$WRAPPER(6, "LOOP", 6, "loop", "loop"), new InteractionOperatorKind_$WRAPPER(7, "CRITICAL", 7, "critical", "critical"), new InteractionOperatorKind_$WRAPPER(8, "NEG", 8, "neg", "neg"), new InteractionOperatorKind_$WRAPPER(9, "ASSERT", 9, "assert", "assert"), new InteractionOperatorKind_$WRAPPER(10, "IGNORE", 10, "ignore", "ignore"), new InteractionOperatorKind_$WRAPPER(11, "CONSIDER", 11, "consider", "consider")];

}


uml.InteractionOperatorKind_$WRAPPER.VALUES_$LI$();

uml.InteractionOperatorKind_$WRAPPER.VALUES_ARRAY_$LI$();
