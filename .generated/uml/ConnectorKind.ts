/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Connector Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ConnectorKind is an enumeration that defines whether a Connector is an assembly or a delegation.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getConnectorKind()
     * @model
     * @generated
     * @enum
     * @property {uml.ConnectorKind} ASSEMBLY
     * The '<em><b>Assembly</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #ASSEMBLY_VALUE
     * @generated
     * @ordered
     * @property {uml.ConnectorKind} DELEGATION
     * The '<em><b>Delegation</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #DELEGATION_VALUE
     * @generated
     * @ordered
     * @property {number} ASSEMBLY_VALUE
     * The '<em><b>Assembly</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the Connector is an assembly Connector.
     * <!-- end-model-doc -->
     * @see #ASSEMBLY
     * @model name="assembly"
     * @generated
     * @ordered
     * @property {number} DELEGATION_VALUE
     * The '<em><b>Delegation</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the Connector is a delegation Connector.
     * <!-- end-model-doc -->
     * @see #DELEGATION
     * @model name="delegation"
     * @generated
     * @ordered
     * @property {uml.ConnectorKind[]} VALUES
     * A public read-only list of all the '<em><b>Connector Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum ConnectorKind {
        
        /**
         * The '<em><b>Assembly</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #ASSEMBLY_VALUE
         * @generated
         * @ordered
         */
        ASSEMBLY, 
        /**
         * The '<em><b>Delegation</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #DELEGATION_VALUE
         * @generated
         * @ordered
         */
        DELEGATION
    }

    /** @ignore */
    export class ConnectorKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Assembly</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the Connector is an assembly Connector.
         * <!-- end-model-doc -->
         * @see #ASSEMBLY
         * @model name="assembly"
         * @generated
         * @ordered
         */
        public static ASSEMBLY_VALUE = 0;

        /**
         * The '<em><b>Delegation</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the Connector is a delegation Connector.
         * <!-- end-model-doc -->
         * @see #DELEGATION
         * @model name="delegation"
         * @generated
         * @ordered
         */
        public static DELEGATION_VALUE = 1;

        /**
         * An array of all the '<em><b>Connector Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : ConnectorKind[] { if(ConnectorKind_$WRAPPER.VALUES_ARRAY == null) ConnectorKind_$WRAPPER.VALUES_ARRAY = [ConnectorKind.ASSEMBLY, ConnectorKind.DELEGATION]; return ConnectorKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Connector Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<ConnectorKind> { if(ConnectorKind_$WRAPPER.VALUES == null) ConnectorKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return ConnectorKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : ConnectorKind {
            for(let i = 0; i < ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ConnectorKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Connector Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.ConnectorKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.ConnectorKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.ConnectorKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Connector Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.ConnectorKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : ConnectorKind {
            for(let i = 0; i < ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ConnectorKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : ConnectorKind {
            switch((value)) {
            case 0 /* ASSEMBLY_VALUE */:
                return ConnectorKind.ASSEMBLY;
            case 1 /* DELEGATION_VALUE */:
                return ConnectorKind.DELEGATION;
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
    ConnectorKind["__class"] = "uml.ConnectorKind";
    ConnectorKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    ConnectorKind["_$wrappers"] = [new ConnectorKind_$WRAPPER(0, "ASSEMBLY", 0, "assembly", "assembly"), new ConnectorKind_$WRAPPER(1, "DELEGATION", 1, "delegation", "delegation")];

}


uml.ConnectorKind_$WRAPPER.VALUES_$LI$();

uml.ConnectorKind_$WRAPPER.VALUES_ARRAY_$LI$();
