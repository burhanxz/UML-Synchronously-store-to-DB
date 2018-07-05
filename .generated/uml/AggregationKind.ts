/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Aggregation Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * AggregationKind is an Enumeration for specifying the kind of aggregation of a Property.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getAggregationKind()
     * @model
     * @generated
     * @enum
     * @property {uml.AggregationKind} NONE
     * The '<em><b>None</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #NONE_VALUE
     * @generated
     * @ordered
     * @property {uml.AggregationKind} SHARED
     * The '<em><b>Shared</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #SHARED_VALUE
     * @generated
     * @ordered
     * @property {uml.AggregationKind} COMPOSITE
     * The '<em><b>Composite</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #COMPOSITE_VALUE
     * @generated
     * @ordered
     * @property {number} NONE_VALUE
     * The '<em><b>None</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the Property has no aggregation.
     * <!-- end-model-doc -->
     * @see #NONE
     * @model name="none"
     * @generated
     * @ordered
     * @property {number} SHARED_VALUE
     * The '<em><b>Shared</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the Property has shared aggregation.
     * <!-- end-model-doc -->
     * @see #SHARED
     * @model name="shared"
     * @generated
     * @ordered
     * @property {number} COMPOSITE_VALUE
     * The '<em><b>Composite</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the Property is aggregated compositely, i.e., the composite object has responsibility for the existence and storage of the composed objects (parts).
     * <!-- end-model-doc -->
     * @see #COMPOSITE
     * @model name="composite"
     * @generated
     * @ordered
     * @property {uml.AggregationKind[]} VALUES
     * A public read-only list of all the '<em><b>Aggregation Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum AggregationKind {
        
        /**
         * The '<em><b>None</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #NONE_VALUE
         * @generated
         * @ordered
         */
        NONE, 
        /**
         * The '<em><b>Shared</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #SHARED_VALUE
         * @generated
         * @ordered
         */
        SHARED, 
        /**
         * The '<em><b>Composite</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #COMPOSITE_VALUE
         * @generated
         * @ordered
         */
        COMPOSITE
    }

    /** @ignore */
    export class AggregationKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>None</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the Property has no aggregation.
         * <!-- end-model-doc -->
         * @see #NONE
         * @model name="none"
         * @generated
         * @ordered
         */
        public static NONE_VALUE = 0;

        /**
         * The '<em><b>Shared</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the Property has shared aggregation.
         * <!-- end-model-doc -->
         * @see #SHARED
         * @model name="shared"
         * @generated
         * @ordered
         */
        public static SHARED_VALUE = 1;

        /**
         * The '<em><b>Composite</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the Property is aggregated compositely, i.e., the composite object has responsibility for the existence and storage of the composed objects (parts).
         * <!-- end-model-doc -->
         * @see #COMPOSITE
         * @model name="composite"
         * @generated
         * @ordered
         */
        public static COMPOSITE_VALUE = 2;

        /**
         * An array of all the '<em><b>Aggregation Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : AggregationKind[] { if(AggregationKind_$WRAPPER.VALUES_ARRAY == null) AggregationKind_$WRAPPER.VALUES_ARRAY = [AggregationKind.NONE, AggregationKind.SHARED, AggregationKind.COMPOSITE]; return AggregationKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Aggregation Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<AggregationKind> { if(AggregationKind_$WRAPPER.VALUES == null) AggregationKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return AggregationKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : AggregationKind {
            for(let i = 0; i < AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.AggregationKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Aggregation Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.AggregationKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.AggregationKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.AggregationKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Aggregation Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.AggregationKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : AggregationKind {
            for(let i = 0; i < AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.AggregationKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : AggregationKind {
            switch((value)) {
            case 0 /* NONE_VALUE */:
                return AggregationKind.NONE;
            case 1 /* SHARED_VALUE */:
                return AggregationKind.SHARED;
            case 2 /* COMPOSITE_VALUE */:
                return AggregationKind.COMPOSITE;
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
    AggregationKind["__class"] = "uml.AggregationKind";
    AggregationKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    AggregationKind["_$wrappers"] = [new AggregationKind_$WRAPPER(0, "NONE", 0, "none", "none"), new AggregationKind_$WRAPPER(1, "SHARED", 1, "shared", "shared"), new AggregationKind_$WRAPPER(2, "COMPOSITE", 2, "composite", "composite")];

}


uml.AggregationKind_$WRAPPER.VALUES_$LI$();

uml.AggregationKind_$WRAPPER.VALUES_ARRAY_$LI$();
