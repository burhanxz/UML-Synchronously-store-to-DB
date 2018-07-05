/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Flow Direction</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * @see sysml.portandflows.PortandflowsPackage#getFlowDirection()
     * @model
     * @generated
     * @enum
     * @property {sysml.portandflows.FlowDirection} IN
     * The '<em><b>In</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #IN_VALUE
     * @generated
     * @ordered
     * @property {sysml.portandflows.FlowDirection} OUT
     * The '<em><b>Out</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #OUT_VALUE
     * @generated
     * @ordered
     * @property {sysml.portandflows.FlowDirection} INOUT
     * The '<em><b>Inout</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #INOUT_VALUE
     * @generated
     * @ordered
     * @property {number} IN_VALUE
     * The '<em><b>In</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <p>
     * If the meaning of '<em><b>In</b></em>' literal object isn't clear,
     * there really should be more of a description here...
     * </p>
     * <!-- end-user-doc -->
     * @see #IN
     * @model name="in"
     * @generated
     * @ordered
     * @property {number} OUT_VALUE
     * The '<em><b>Out</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <p>
     * If the meaning of '<em><b>Out</b></em>' literal object isn't clear,
     * there really should be more of a description here...
     * </p>
     * <!-- end-user-doc -->
     * @see #OUT
     * @model name="out"
     * @generated
     * @ordered
     * @property {number} INOUT_VALUE
     * The '<em><b>Inout</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <p>
     * If the meaning of '<em><b>Inout</b></em>' literal object isn't clear,
     * there really should be more of a description here...
     * </p>
     * <!-- end-user-doc -->
     * @see #INOUT
     * @model name="inout"
     * @generated
     * @ordered
     * @property {sysml.portandflows.FlowDirection[]} VALUES
     * A public read-only list of all the '<em><b>Flow Direction</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum FlowDirection {
        
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
         * The '<em><b>Out</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #OUT_VALUE
         * @generated
         * @ordered
         */
        OUT, 
        /**
         * The '<em><b>Inout</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #INOUT_VALUE
         * @generated
         * @ordered
         */
        INOUT
    }

    /** @ignore */
    export class FlowDirection_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>In</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of '<em><b>In</b></em>' literal object isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @see #IN
         * @model name="in"
         * @generated
         * @ordered
         */
        public static IN_VALUE = 0;

        /**
         * The '<em><b>Out</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of '<em><b>Out</b></em>' literal object isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @see #OUT
         * @model name="out"
         * @generated
         * @ordered
         */
        public static OUT_VALUE = 1;

        /**
         * The '<em><b>Inout</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of '<em><b>Inout</b></em>' literal object isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @see #INOUT
         * @model name="inout"
         * @generated
         * @ordered
         */
        public static INOUT_VALUE = 2;

        /**
         * An array of all the '<em><b>Flow Direction</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : FlowDirection[] { if(FlowDirection_$WRAPPER.VALUES_ARRAY == null) FlowDirection_$WRAPPER.VALUES_ARRAY = [FlowDirection.IN, FlowDirection.OUT, FlowDirection.INOUT]; return FlowDirection_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Flow Direction</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<FlowDirection> { if(FlowDirection_$WRAPPER.VALUES == null) FlowDirection_$WRAPPER.VALUES = /* unmodifiableList *//* asList */FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return FlowDirection_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : FlowDirection {
            for(let i = 0; i < FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(sysml.portandflows.FlowDirection["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Flow Direction</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {sysml.portandflows.FlowDirection} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>sysml.portandflows.FlowDirection_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>sysml.portandflows.FlowDirection_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Flow Direction</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {sysml.portandflows.FlowDirection} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : FlowDirection {
            for(let i = 0; i < FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(sysml.portandflows.FlowDirection["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : FlowDirection {
            switch((value)) {
            case 0 /* IN_VALUE */:
                return FlowDirection.IN;
            case 1 /* OUT_VALUE */:
                return FlowDirection.OUT;
            case 2 /* INOUT_VALUE */:
                return FlowDirection.INOUT;
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
    FlowDirection["__class"] = "sysml.portandflows.FlowDirection";
    FlowDirection["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    FlowDirection["_$wrappers"] = [new FlowDirection_$WRAPPER(0, "IN", 0, "in", "in"), new FlowDirection_$WRAPPER(1, "OUT", 1, "out", "out"), new FlowDirection_$WRAPPER(2, "INOUT", 2, "inout", "inout")];

}


sysml.portandflows.FlowDirection_$WRAPPER.VALUES_$LI$();

sysml.portandflows.FlowDirection_$WRAPPER.VALUES_ARRAY_$LI$();
