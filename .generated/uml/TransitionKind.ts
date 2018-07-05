/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Transition Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * TransitionKind is an Enumeration type used to differentiate the various kinds of Transitions.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getTransitionKind()
     * @model
     * @generated
     * @enum
     * @property {uml.TransitionKind} INTERNAL
     * The '<em><b>Internal</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #INTERNAL_VALUE
     * @generated
     * @ordered
     * @property {uml.TransitionKind} LOCAL
     * The '<em><b>Local</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #LOCAL_VALUE
     * @generated
     * @ordered
     * @property {uml.TransitionKind} EXTERNAL
     * The '<em><b>External</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #EXTERNAL_VALUE
     * @generated
     * @ordered
     * @property {number} INTERNAL_VALUE
     * The '<em><b>Internal</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Implies that the Transition, if triggered, occurs without exiting or entering the source State (i.e., it does not cause a state change). This means that the entry or exit condition of the source State will not be invoked. An internal Transition can be taken even if the SateMachine is in one or more Regions nested within the associated State.
     * <!-- end-model-doc -->
     * @see #INTERNAL
     * @model name="internal"
     * @generated
     * @ordered
     * @property {number} LOCAL_VALUE
     * The '<em><b>Local</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Implies that the Transition, if triggered, will not exit the composite (source) State, but it will exit and re-enter any state within the composite State that is in the current state configuration.
     * <!-- end-model-doc -->
     * @see #LOCAL
     * @model name="local"
     * @generated
     * @ordered
     * @property {number} EXTERNAL_VALUE
     * The '<em><b>External</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Implies that the Transition, if triggered, will exit the composite (source) State.
     * <!-- end-model-doc -->
     * @see #EXTERNAL
     * @model name="external"
     * @generated
     * @ordered
     * @property {uml.TransitionKind[]} VALUES
     * A public read-only list of all the '<em><b>Transition Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum TransitionKind {
        
        /**
         * The '<em><b>Internal</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #INTERNAL_VALUE
         * @generated
         * @ordered
         */
        INTERNAL, 
        /**
         * The '<em><b>Local</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #LOCAL_VALUE
         * @generated
         * @ordered
         */
        LOCAL, 
        /**
         * The '<em><b>External</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #EXTERNAL_VALUE
         * @generated
         * @ordered
         */
        EXTERNAL
    }

    /** @ignore */
    export class TransitionKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Internal</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Implies that the Transition, if triggered, occurs without exiting or entering the source State (i.e., it does not cause a state change). This means that the entry or exit condition of the source State will not be invoked. An internal Transition can be taken even if the SateMachine is in one or more Regions nested within the associated State.
         * <!-- end-model-doc -->
         * @see #INTERNAL
         * @model name="internal"
         * @generated
         * @ordered
         */
        public static INTERNAL_VALUE = 0;

        /**
         * The '<em><b>Local</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Implies that the Transition, if triggered, will not exit the composite (source) State, but it will exit and re-enter any state within the composite State that is in the current state configuration.
         * <!-- end-model-doc -->
         * @see #LOCAL
         * @model name="local"
         * @generated
         * @ordered
         */
        public static LOCAL_VALUE = 1;

        /**
         * The '<em><b>External</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Implies that the Transition, if triggered, will exit the composite (source) State.
         * <!-- end-model-doc -->
         * @see #EXTERNAL
         * @model name="external"
         * @generated
         * @ordered
         */
        public static EXTERNAL_VALUE = 2;

        /**
         * An array of all the '<em><b>Transition Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : TransitionKind[] { if(TransitionKind_$WRAPPER.VALUES_ARRAY == null) TransitionKind_$WRAPPER.VALUES_ARRAY = [TransitionKind.INTERNAL, TransitionKind.LOCAL, TransitionKind.EXTERNAL]; return TransitionKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Transition Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<TransitionKind> { if(TransitionKind_$WRAPPER.VALUES == null) TransitionKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return TransitionKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : TransitionKind {
            for(let i = 0; i < TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.TransitionKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Transition Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.TransitionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.TransitionKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.TransitionKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Transition Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.TransitionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : TransitionKind {
            for(let i = 0; i < TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.TransitionKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : TransitionKind {
            switch((value)) {
            case 0 /* INTERNAL_VALUE */:
                return TransitionKind.INTERNAL;
            case 1 /* LOCAL_VALUE */:
                return TransitionKind.LOCAL;
            case 2 /* EXTERNAL_VALUE */:
                return TransitionKind.EXTERNAL;
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
    TransitionKind["__class"] = "uml.TransitionKind";
    TransitionKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    TransitionKind["_$wrappers"] = [new TransitionKind_$WRAPPER(0, "INTERNAL", 0, "internal", "internal"), new TransitionKind_$WRAPPER(1, "LOCAL", 1, "local", "local"), new TransitionKind_$WRAPPER(2, "EXTERNAL", 2, "external", "external")];

}


uml.TransitionKind_$WRAPPER.VALUES_$LI$();

uml.TransitionKind_$WRAPPER.VALUES_ARRAY_$LI$();
