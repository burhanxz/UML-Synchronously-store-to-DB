/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Parameter Effect Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * ParameterEffectKind is an Enumeration that indicates the effect of a Behavior on values passed in or out of its parameters.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getParameterEffectKind()
     * @model
     * @generated
     * @enum
     * @property {uml.ParameterEffectKind} CREATE
     * The '<em><b>Create</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #CREATE_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterEffectKind} READ
     * The '<em><b>Read</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #READ_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterEffectKind} UPDATE
     * The '<em><b>Update</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #UPDATE_VALUE
     * @generated
     * @ordered
     * @property {uml.ParameterEffectKind} DELETE
     * The '<em><b>Delete</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #DELETE_VALUE
     * @generated
     * @ordered
     * @property {number} CREATE_VALUE
     * The '<em><b>Create</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates that the behavior creates values.
     * <!-- end-model-doc -->
     * @see #CREATE
     * @model name="create"
     * @generated
     * @ordered
     * @property {number} READ_VALUE
     * The '<em><b>Read</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates objects that are values of the parameter have values of their properties, or links in which they participate, or their classifiers retrieved during executions of the behavior.
     * <!-- end-model-doc -->
     * @see #READ
     * @model name="read"
     * @generated
     * @ordered
     * @property {number} UPDATE_VALUE
     * The '<em><b>Update</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates objects that are values of the parameter have values of their properties, or links in which they participate, or their classification changed during executions of the behavior.
     * <!-- end-model-doc -->
     * @see #UPDATE
     * @model name="update"
     * @generated
     * @ordered
     * @property {number} DELETE_VALUE
     * The '<em><b>Delete</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * Indicates objects that are values of the parameter do not exist after executions of the behavior are finished.
     * <!-- end-model-doc -->
     * @see #DELETE
     * @model name="delete"
     * @generated
     * @ordered
     * @property {uml.ParameterEffectKind[]} VALUES
     * A public read-only list of all the '<em><b>Parameter Effect Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum ParameterEffectKind {
        
        /**
         * The '<em><b>Create</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #CREATE_VALUE
         * @generated
         * @ordered
         */
        CREATE, 
        /**
         * The '<em><b>Read</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #READ_VALUE
         * @generated
         * @ordered
         */
        READ, 
        /**
         * The '<em><b>Update</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #UPDATE_VALUE
         * @generated
         * @ordered
         */
        UPDATE, 
        /**
         * The '<em><b>Delete</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #DELETE_VALUE
         * @generated
         * @ordered
         */
        DELETE
    }

    /** @ignore */
    export class ParameterEffectKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Create</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates that the behavior creates values.
         * <!-- end-model-doc -->
         * @see #CREATE
         * @model name="create"
         * @generated
         * @ordered
         */
        public static CREATE_VALUE = 0;

        /**
         * The '<em><b>Read</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates objects that are values of the parameter have values of their properties, or links in which they participate, or their classifiers retrieved during executions of the behavior.
         * <!-- end-model-doc -->
         * @see #READ
         * @model name="read"
         * @generated
         * @ordered
         */
        public static READ_VALUE = 1;

        /**
         * The '<em><b>Update</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates objects that are values of the parameter have values of their properties, or links in which they participate, or their classification changed during executions of the behavior.
         * <!-- end-model-doc -->
         * @see #UPDATE
         * @model name="update"
         * @generated
         * @ordered
         */
        public static UPDATE_VALUE = 2;

        /**
         * The '<em><b>Delete</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates objects that are values of the parameter do not exist after executions of the behavior are finished.
         * <!-- end-model-doc -->
         * @see #DELETE
         * @model name="delete"
         * @generated
         * @ordered
         */
        public static DELETE_VALUE = 3;

        /**
         * An array of all the '<em><b>Parameter Effect Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : ParameterEffectKind[] { if(ParameterEffectKind_$WRAPPER.VALUES_ARRAY == null) ParameterEffectKind_$WRAPPER.VALUES_ARRAY = [ParameterEffectKind.CREATE, ParameterEffectKind.READ, ParameterEffectKind.UPDATE, ParameterEffectKind.DELETE]; return ParameterEffectKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Parameter Effect Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<ParameterEffectKind> { if(ParameterEffectKind_$WRAPPER.VALUES == null) ParameterEffectKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return ParameterEffectKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : ParameterEffectKind {
            for(let i = 0; i < ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ParameterEffectKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Parameter Effect Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.ParameterEffectKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.ParameterEffectKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.ParameterEffectKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Parameter Effect Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.ParameterEffectKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : ParameterEffectKind {
            for(let i = 0; i < ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.ParameterEffectKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : ParameterEffectKind {
            switch((value)) {
            case 0 /* CREATE_VALUE */:
                return ParameterEffectKind.CREATE;
            case 1 /* READ_VALUE */:
                return ParameterEffectKind.READ;
            case 2 /* UPDATE_VALUE */:
                return ParameterEffectKind.UPDATE;
            case 3 /* DELETE_VALUE */:
                return ParameterEffectKind.DELETE;
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
    ParameterEffectKind["__class"] = "uml.ParameterEffectKind";
    ParameterEffectKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    ParameterEffectKind["_$wrappers"] = [new ParameterEffectKind_$WRAPPER(0, "CREATE", 0, "create", "create"), new ParameterEffectKind_$WRAPPER(1, "READ", 1, "read", "read"), new ParameterEffectKind_$WRAPPER(2, "UPDATE", 2, "update", "update"), new ParameterEffectKind_$WRAPPER(3, "DELETE", 3, "delete", "delete")];

}


uml.ParameterEffectKind_$WRAPPER.VALUES_$LI$();

uml.ParameterEffectKind_$WRAPPER.VALUES_ARRAY_$LI$();
