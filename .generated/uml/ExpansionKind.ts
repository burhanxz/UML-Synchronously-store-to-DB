/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Expansion Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ExpansionKind is an enumeration type used to specify how an ExpansionRegion executes its contents.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getExpansionKind()
     * @model
     * @generated
     * @enum
     * @property {uml.ExpansionKind} PARALLEL
     * The '<em><b>Parallel</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PARALLEL_VALUE
     * @generated
     * @ordered
     * @property {uml.ExpansionKind} ITERATIVE
     * The '<em><b>Iterative</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ITERATIVE_VALUE
     * @generated
     * @ordered
     * @property {uml.ExpansionKind} STREAM
     * The '<em><b>Stream</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #STREAM_VALUE
     * @generated
     * @ordered
     * @property {number} PARALLEL_VALUE
     * The '<em><b>Parallel</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The content of the ExpansionRegion is executed concurrently for the elements of the input collections.
     * <!-- end-model-doc -->
     * @see #PARALLEL
     * @model name="parallel"
     * @generated
     * @ordered
     * @property {number} ITERATIVE_VALUE
     * The '<em><b>Iterative</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * The content of the ExpansionRegion is executed iteratively for the elements of the input collections, in the order of the input elements, if the collections are ordered.
     * <!-- end-model-doc -->
     * @see #ITERATIVE
     * @model name="iterative"
     * @generated
     * @ordered
     * @property {number} STREAM_VALUE
     * The '<em><b>Stream</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * A stream of input collection elements flows into a single execution of the content of the ExpansionRegion, in the order of the collection elements if the input collections are ordered.
     * <!-- end-model-doc -->
     * @see #STREAM
     * @model name="stream"
     * @generated
     * @ordered
     * @property {uml.ExpansionKind[]} VALUES
     * A public read-only list of all the '<em><b>Expansion Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum ExpansionKind {
        
        /**
         * The '<em><b>Parallel</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PARALLEL_VALUE
         * @generated
         * @ordered
         */
        PARALLEL, 
        /**
         * The '<em><b>Iterative</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ITERATIVE_VALUE
         * @generated
         * @ordered
         */
        ITERATIVE, 
        /**
         * The '<em><b>Stream</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #STREAM_VALUE
         * @generated
         * @ordered
         */
        STREAM
    }

    /** @ignore */
    export class ExpansionKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Parallel</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The content of the ExpansionRegion is executed concurrently for the elements of the input collections.
         * <!-- end-model-doc -->
         * @see #PARALLEL
         * @model name="parallel"
         * @generated
         * @ordered
         */
        public static PARALLEL_VALUE = 0;

        /**
         * The '<em><b>Iterative</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The content of the ExpansionRegion is executed iteratively for the elements of the input collections, in the order of the input elements, if the collections are ordered.
         * <!-- end-model-doc -->
         * @see #ITERATIVE
         * @model name="iterative"
         * @generated
         * @ordered
         */
        public static ITERATIVE_VALUE = 1;

        /**
         * The '<em><b>Stream</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A stream of input collection elements flows into a single execution of the content of the ExpansionRegion, in the order of the collection elements if the input collections are ordered.
         * <!-- end-model-doc -->
         * @see #STREAM
         * @model name="stream"
         * @generated
         * @ordered
         */
        public static STREAM_VALUE = 2;

        /**
         * An array of all the '<em><b>Expansion Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : ExpansionKind[] { if(ExpansionKind_$WRAPPER.VALUES_ARRAY == null) ExpansionKind_$WRAPPER.VALUES_ARRAY = [ExpansionKind.PARALLEL, ExpansionKind.ITERATIVE, ExpansionKind.STREAM]; return ExpansionKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Expansion Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<ExpansionKind> { if(ExpansionKind_$WRAPPER.VALUES == null) ExpansionKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return ExpansionKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : ExpansionKind {
            for(let i = 0; i < ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ExpansionKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Expansion Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.ExpansionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.ExpansionKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.ExpansionKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Expansion Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.ExpansionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : ExpansionKind {
            for(let i = 0; i < ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ExpansionKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : ExpansionKind {
            switch((value)) {
            case 0 /* PARALLEL_VALUE */:
                return ExpansionKind.PARALLEL;
            case 1 /* ITERATIVE_VALUE */:
                return ExpansionKind.ITERATIVE;
            case 2 /* STREAM_VALUE */:
                return ExpansionKind.STREAM;
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
    ExpansionKind["__class"] = "uml.ExpansionKind";
    ExpansionKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    ExpansionKind["_$wrappers"] = [new ExpansionKind_$WRAPPER(0, "PARALLEL", 0, "parallel", "parallel"), new ExpansionKind_$WRAPPER(1, "ITERATIVE", 1, "iterative", "iterative"), new ExpansionKind_$WRAPPER(2, "STREAM", 2, "stream", "stream")];

}


uml.ExpansionKind_$WRAPPER.VALUES_$LI$();

uml.ExpansionKind_$WRAPPER.VALUES_ARRAY_$LI$();
