/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Parameter Direction Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ParameterDirectionKind is an Enumeration that defines literals used to specify direction of parameters.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getParameterDirectionKind()
     * @model
     * @generated
     * @enum
     * @property {uml.ParameterDirectionKind} IN
     * The '<em><b>In</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #IN_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterDirectionKind} INOUT
     * The '<em><b>Inout</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #INOUT_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterDirectionKind} OUT
     * The '<em><b>Out</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #OUT_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterDirectionKind} RETURN
     * The '<em><b>Return</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #RETURN_VALUE
     * @generated
     * @ordered
     * @property {number} IN_VALUE
     * The '<em><b>In</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that Parameter values are passed in by the caller.
     * <!-- end-model-doc -->
     * @see #IN
     * @model name="in"
     * @generated
     * @ordered
     * @property {number} INOUT_VALUE
     * The '<em><b>Inout</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that Parameter values are passed in by the caller and (possibly different) values passed out to the caller.
     * <!-- end-model-doc -->
     * @see #INOUT
     * @model name="inout"
     * @generated
     * @ordered
     * @property {number} OUT_VALUE
     * The '<em><b>Out</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that Parameter values are passed out to the caller.
     * <!-- end-model-doc -->
     * @see #OUT
     * @model name="out"
     * @generated
     * @ordered
     * @property {number} RETURN_VALUE
     * The '<em><b>Return</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that Parameter values are passed as return values back to the caller.
     * <!-- end-model-doc -->
     * @see #RETURN
     * @model name="return"
     * @generated
     * @ordered
     * @property {uml.ParameterDirectionKind[]} VALUES
     * A public read-only list of all the '<em><b>Parameter Direction Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum ParameterDirectionKind {
        
        /**
         * The '<em><b>In</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #IN_VALUE
         * @generated
         * @ordered
         */
        IN, 
        /**
         * The '<em><b>Inout</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #INOUT_VALUE
         * @generated
         * @ordered
         */
        INOUT, 
        /**
         * The '<em><b>Out</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #OUT_VALUE
         * @generated
         * @ordered
         */
        OUT, 
        /**
         * The '<em><b>Return</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #RETURN_VALUE
         * @generated
         * @ordered
         */
        RETURN
    }

    /** @ignore */
    export class ParameterDirectionKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>In</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that Parameter values are passed in by the caller.
         * <!-- end-model-doc -->
         * @see #IN
         * @model name="in"
         * @generated
         * @ordered
         */
        public static IN_VALUE = 0;

        /**
         * The '<em><b>Inout</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that Parameter values are passed in by the caller and (possibly different) values passed out to the caller.
         * <!-- end-model-doc -->
         * @see #INOUT
         * @model name="inout"
         * @generated
         * @ordered
         */
        public static INOUT_VALUE = 1;

        /**
         * The '<em><b>Out</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that Parameter values are passed out to the caller.
         * <!-- end-model-doc -->
         * @see #OUT
         * @model name="out"
         * @generated
         * @ordered
         */
        public static OUT_VALUE = 2;

        /**
         * The '<em><b>Return</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that Parameter values are passed as return values back to the caller.
         * <!-- end-model-doc -->
         * @see #RETURN
         * @model name="return"
         * @generated
         * @ordered
         */
        public static RETURN_VALUE = 3;

        /**
         * An array of all the '<em><b>Parameter Direction Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : ParameterDirectionKind[] { if(ParameterDirectionKind_$WRAPPER.VALUES_ARRAY == null) ParameterDirectionKind_$WRAPPER.VALUES_ARRAY = [ParameterDirectionKind.IN, ParameterDirectionKind.INOUT, ParameterDirectionKind.OUT, ParameterDirectionKind.RETURN]; return ParameterDirectionKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Parameter Direction Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<ParameterDirectionKind> { if(ParameterDirectionKind_$WRAPPER.VALUES == null) ParameterDirectionKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return ParameterDirectionKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : ParameterDirectionKind {
            for(let i = 0; i < ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ParameterDirectionKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Parameter Direction Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.ParameterDirectionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.ParameterDirectionKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.ParameterDirectionKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Parameter Direction Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.ParameterDirectionKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : ParameterDirectionKind {
            for(let i = 0; i < ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ParameterDirectionKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : ParameterDirectionKind {
            switch((value)) {
            case 0 /* IN_VALUE */:
                return ParameterDirectionKind.IN;
            case 1 /* INOUT_VALUE */:
                return ParameterDirectionKind.INOUT;
            case 2 /* OUT_VALUE */:
                return ParameterDirectionKind.OUT;
            case 3 /* RETURN_VALUE */:
                return ParameterDirectionKind.RETURN;
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
    ParameterDirectionKind["__class"] = "uml.ParameterDirectionKind";
    ParameterDirectionKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    ParameterDirectionKind["_$wrappers"] = [new ParameterDirectionKind_$WRAPPER(0, "IN", 0, "in", "in"), new ParameterDirectionKind_$WRAPPER(1, "INOUT", 1, "inout", "inout"), new ParameterDirectionKind_$WRAPPER(2, "OUT", 2, "out", "out"), new ParameterDirectionKind_$WRAPPER(3, "RETURN", 3, "return", "return")];

}


uml.ParameterDirectionKind_$WRAPPER.VALUES_$LI$();

uml.ParameterDirectionKind_$WRAPPER.VALUES_ARRAY_$LI$();
