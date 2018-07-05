/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Call Concurrency Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * CallConcurrencyKind is an Enumeration used to specify the semantics of concurrent calls to a BehavioralFeature.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getCallConcurrencyKind()
     * @model
     * @generated
     * @enum
     * @property {uml.CallConcurrencyKind} SEQUENTIAL
     * The '<em><b>Sequential</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #SEQUENTIAL_VALUE
     * @generated
     * @ordered
     * @property {uml.CallConcurrencyKind} GUARDED
     * The '<em><b>Guarded</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #GUARDED_VALUE
     * @generated
     * @ordered
     * @property {uml.CallConcurrencyKind} CONCURRENT
     * The '<em><b>Concurrent</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #CONCURRENT_VALUE
     * @generated
     * @ordered
     * @property {number} SEQUENTIAL_VALUE
     * The '<em><b>Sequential</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * No concurrency management mechanism is associated with the BehavioralFeature and, therefore, concurrency conflicts may occur. Instances that invoke a BehavioralFeature need to coordinate so that only one invocation to a target on any BehavioralFeature occurs at once.
     * <!-- end-model-doc -->
     * @see #SEQUENTIAL
     * @model name="sequential"
     * @generated
     * @ordered
     * @property {number} GUARDED_VALUE
     * The '<em><b>Guarded</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Multiple invocations of a BehavioralFeature that overlap in time may occur to one instance, but only one is allowed to commence. The others are blocked until the performance of the currently executing BehavioralFeature is complete. It is the responsibility of the system designer to ensure that deadlocks do not occur due to simultaneous blocking.
     * <!-- end-model-doc -->
     * @see #GUARDED
     * @model name="guarded"
     * @generated
     * @ordered
     * @property {number} CONCURRENT_VALUE
     * The '<em><b>Concurrent</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Multiple invocations of a BehavioralFeature that overlap in time may occur to one instance and all of them may proceed concurrently.
     * <!-- end-model-doc -->
     * @see #CONCURRENT
     * @model name="concurrent"
     * @generated
     * @ordered
     * @property {uml.CallConcurrencyKind[]} VALUES
     * A public read-only list of all the '<em><b>Call Concurrency Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum CallConcurrencyKind {
        
        /**
         * The '<em><b>Sequential</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #SEQUENTIAL_VALUE
         * @generated
         * @ordered
         */
        SEQUENTIAL, 
        /**
         * The '<em><b>Guarded</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #GUARDED_VALUE
         * @generated
         * @ordered
         */
        GUARDED, 
        /**
         * The '<em><b>Concurrent</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #CONCURRENT_VALUE
         * @generated
         * @ordered
         */
        CONCURRENT
    }

    /** @ignore */
    export class CallConcurrencyKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Sequential</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * No concurrency management mechanism is associated with the BehavioralFeature and, therefore, concurrency conflicts may occur. Instances that invoke a BehavioralFeature need to coordinate so that only one invocation to a target on any BehavioralFeature occurs at once.
         * <!-- end-model-doc -->
         * @see #SEQUENTIAL
         * @model name="sequential"
         * @generated
         * @ordered
         */
        public static SEQUENTIAL_VALUE = 0;

        /**
         * The '<em><b>Guarded</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Multiple invocations of a BehavioralFeature that overlap in time may occur to one instance, but only one is allowed to commence. The others are blocked until the performance of the currently executing BehavioralFeature is complete. It is the responsibility of the system designer to ensure that deadlocks do not occur due to simultaneous blocking.
         * <!-- end-model-doc -->
         * @see #GUARDED
         * @model name="guarded"
         * @generated
         * @ordered
         */
        public static GUARDED_VALUE = 1;

        /**
         * The '<em><b>Concurrent</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Multiple invocations of a BehavioralFeature that overlap in time may occur to one instance and all of them may proceed concurrently.
         * <!-- end-model-doc -->
         * @see #CONCURRENT
         * @model name="concurrent"
         * @generated
         * @ordered
         */
        public static CONCURRENT_VALUE = 2;

        /**
         * An array of all the '<em><b>Call Concurrency Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : CallConcurrencyKind[] { if(CallConcurrencyKind_$WRAPPER.VALUES_ARRAY == null) CallConcurrencyKind_$WRAPPER.VALUES_ARRAY = [CallConcurrencyKind.SEQUENTIAL, CallConcurrencyKind.GUARDED, CallConcurrencyKind.CONCURRENT]; return CallConcurrencyKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Call Concurrency Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<CallConcurrencyKind> { if(CallConcurrencyKind_$WRAPPER.VALUES == null) CallConcurrencyKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return CallConcurrencyKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : CallConcurrencyKind {
            for(let i = 0; i < CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.CallConcurrencyKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Call Concurrency Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.CallConcurrencyKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.CallConcurrencyKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.CallConcurrencyKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Call Concurrency Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.CallConcurrencyKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : CallConcurrencyKind {
            for(let i = 0; i < CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.CallConcurrencyKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : CallConcurrencyKind {
            switch((value)) {
            case 0 /* SEQUENTIAL_VALUE */:
                return CallConcurrencyKind.SEQUENTIAL;
            case 1 /* GUARDED_VALUE */:
                return CallConcurrencyKind.GUARDED;
            case 2 /* CONCURRENT_VALUE */:
                return CallConcurrencyKind.CONCURRENT;
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
    CallConcurrencyKind["__class"] = "uml.CallConcurrencyKind";
    CallConcurrencyKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    CallConcurrencyKind["_$wrappers"] = [new CallConcurrencyKind_$WRAPPER(0, "SEQUENTIAL", 0, "sequential", "sequential"), new CallConcurrencyKind_$WRAPPER(1, "GUARDED", 1, "guarded", "guarded"), new CallConcurrencyKind_$WRAPPER(2, "CONCURRENT", 2, "concurrent", "concurrent")];

}


uml.CallConcurrencyKind_$WRAPPER.VALUES_$LI$();

uml.CallConcurrencyKind_$WRAPPER.VALUES_ARRAY_$LI$();
