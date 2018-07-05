/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Object Node Ordering Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ObjectNodeOrderingKind is an enumeration indicating queuing order for offering the tokens held by an ObjectNode.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getObjectNodeOrderingKind()
     * @model
     * @generated
     * @enum
     * @property {uml.ObjectNodeOrderingKind} UNORDERED
     * The '<em><b>Unordered</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #UNORDERED_VALUE
     * @generated
     * @ordered
     * @property {uml.ObjectNodeOrderingKind} ORDERED
     * The '<em><b>Ordered</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ORDERED_VALUE
     * @generated
     * @ordered
     * @property {uml.ObjectNodeOrderingKind} LIFO
     * The '<em><b>LIFO</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #LIFO_VALUE
     * @generated
     * @ordered
     * @property {uml.ObjectNodeOrderingKind} FIFO
     * The '<em><b>FIFO</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #FIFO_VALUE
     * @generated
     * @ordered
     * @property {number} UNORDERED_VALUE
     * The '<em><b>Unordered</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that tokens are unordered.
     * <!-- end-model-doc -->
     * @see #UNORDERED
     * @model name="unordered"
     * @generated
     * @ordered
     * @property {number} ORDERED_VALUE
     * The '<em><b>Ordered</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that tokens are ordered.
     * <!-- end-model-doc -->
     * @see #ORDERED
     * @model name="ordered"
     * @generated
     * @ordered
     * @property {number} LIFO_VALUE
     * The '<em><b>LIFO</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that tokens are queued in a last in, first out manner.
     * <!-- end-model-doc -->
     * @see #LIFO
     * @model
     * @generated
     * @ordered
     * @property {number} FIFO_VALUE
     * The '<em><b>FIFO</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that tokens are queued in a first in, first out manner.
     * <!-- end-model-doc -->
     * @see #FIFO
     * @model
     * @generated
     * @ordered
     * @property {uml.ObjectNodeOrderingKind[]} VALUES
     * A public read-only list of all the '<em><b>Object Node Ordering Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum ObjectNodeOrderingKind {
        
        /**
         * The '<em><b>Unordered</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #UNORDERED_VALUE
         * @generated
         * @ordered
         */
        UNORDERED, 
        /**
         * The '<em><b>Ordered</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ORDERED_VALUE
         * @generated
         * @ordered
         */
        ORDERED, 
        /**
         * The '<em><b>LIFO</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #LIFO_VALUE
         * @generated
         * @ordered
         */
        LIFO, 
        /**
         * The '<em><b>FIFO</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #FIFO_VALUE
         * @generated
         * @ordered
         */
        FIFO
    }

    /** @ignore */
    export class ObjectNodeOrderingKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Unordered</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that tokens are unordered.
         * <!-- end-model-doc -->
         * @see #UNORDERED
         * @model name="unordered"
         * @generated
         * @ordered
         */
        public static UNORDERED_VALUE = 0;

        /**
         * The '<em><b>Ordered</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that tokens are ordered.
         * <!-- end-model-doc -->
         * @see #ORDERED
         * @model name="ordered"
         * @generated
         * @ordered
         */
        public static ORDERED_VALUE = 1;

        /**
         * The '<em><b>LIFO</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that tokens are queued in a last in, first out manner.
         * <!-- end-model-doc -->
         * @see #LIFO
         * @model
         * @generated
         * @ordered
         */
        public static LIFO_VALUE = 2;

        /**
         * The '<em><b>FIFO</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that tokens are queued in a first in, first out manner.
         * <!-- end-model-doc -->
         * @see #FIFO
         * @model
         * @generated
         * @ordered
         */
        public static FIFO_VALUE = 3;

        /**
         * An array of all the '<em><b>Object Node Ordering Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : ObjectNodeOrderingKind[] { if(ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY == null) ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY = [ObjectNodeOrderingKind.UNORDERED, ObjectNodeOrderingKind.ORDERED, ObjectNodeOrderingKind.LIFO, ObjectNodeOrderingKind.FIFO]; return ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Object Node Ordering Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<ObjectNodeOrderingKind> { if(ObjectNodeOrderingKind_$WRAPPER.VALUES == null) ObjectNodeOrderingKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return ObjectNodeOrderingKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : ObjectNodeOrderingKind {
            for(let i = 0; i < ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ObjectNodeOrderingKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Object Node Ordering Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.ObjectNodeOrderingKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.ObjectNodeOrderingKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.ObjectNodeOrderingKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Object Node Ordering Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.ObjectNodeOrderingKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : ObjectNodeOrderingKind {
            for(let i = 0; i < ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ObjectNodeOrderingKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : ObjectNodeOrderingKind {
            switch((value)) {
            case 0 /* UNORDERED_VALUE */:
                return ObjectNodeOrderingKind.UNORDERED;
            case 1 /* ORDERED_VALUE */:
                return ObjectNodeOrderingKind.ORDERED;
            case 2 /* LIFO_VALUE */:
                return ObjectNodeOrderingKind.LIFO;
            case 3 /* FIFO_VALUE */:
                return ObjectNodeOrderingKind.FIFO;
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
    ObjectNodeOrderingKind["__class"] = "uml.ObjectNodeOrderingKind";
    ObjectNodeOrderingKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    ObjectNodeOrderingKind["_$wrappers"] = [new ObjectNodeOrderingKind_$WRAPPER(0, "UNORDERED", 0, "unordered", "unordered"), new ObjectNodeOrderingKind_$WRAPPER(1, "ORDERED", 1, "ordered", "ordered"), new ObjectNodeOrderingKind_$WRAPPER(2, "LIFO", 2, "LIFO", "LIFO"), new ObjectNodeOrderingKind_$WRAPPER(3, "FIFO", 3, "FIFO", "FIFO")];

}


uml.ObjectNodeOrderingKind_$WRAPPER.VALUES_$LI$();

uml.ObjectNodeOrderingKind_$WRAPPER.VALUES_ARRAY_$LI$();
