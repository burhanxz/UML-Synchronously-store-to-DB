/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the literals of the enumeration '<em><b>Visibility Kind</b></em>',
     * and utility methods for working with them.
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * VisibilityKind is an enumeration type that defines literals to determine the visibility of Elements in a model.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * @see uml.UmlPackage#getVisibilityKind()
     * @model
     * @generated
     * @enum
     * @property {uml.VisibilityKind} PUBLIC
     * The '<em><b>Public</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PUBLIC_VALUE
     * @generated
     * @ordered
     * @property {uml.VisibilityKind} PRIVATE
     * The '<em><b>Private</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PRIVATE_VALUE
     * @generated
     * @ordered
     * @property {uml.VisibilityKind} PROTECTED
     * The '<em><b>Protected</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PROTECTED_VALUE
     * @generated
     * @ordered
     * @property {uml.VisibilityKind} PACKAGE
     * The '<em><b>Package</b></em>' literal object.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @see #PACKAGE_VALUE
     * @generated
     * @ordered
     * @property {number} PUBLIC_VALUE
     * The '<em><b>Public</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * A Named Element with public visibility is visible to all elements that can access the contents of the Namespace that owns it.
     * <!-- end-model-doc -->
     * @see #PUBLIC
     * @model name="public"
     * @generated
     * @ordered
     * @property {number} PRIVATE_VALUE
     * The '<em><b>Private</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * A NamedElement with private visibility is only visible inside the Namespace that owns it.
     * <!-- end-model-doc -->
     * @see #PRIVATE
     * @model name="private"
     * @generated
     * @ordered
     * @property {number} PROTECTED_VALUE
     * The '<em><b>Protected</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * A NamedElement with protected visibility is visible to Elements that have a generalization relationship to the Namespace that owns it.
     * <!-- end-model-doc -->
     * @see #PROTECTED
     * @model name="protected"
     * @generated
     * @ordered
     * @property {number} PACKAGE_VALUE
     * The '<em><b>Package</b></em>' literal value.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * <!-- begin-model-doc -->
     * A NamedElement with package visibility is visible to all Elements within the nearest enclosing Package (given that other owning Elements have proper visibility). Outside the nearest enclosing Package, a NamedElement marked as having package visibility is not visible.  Only NamedElements that are not owned by Packages can be marked as having package visibility.
     * <!-- end-model-doc -->
     * @see #PACKAGE
     * @model name="package"
     * @generated
     * @ordered
     * @property {uml.VisibilityKind[]} VALUES
     * A public read-only list of all the '<em><b>Visibility Kind</b></em>' enumerators.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     */
    export enum VisibilityKind {
        
        /**
         * The '<em><b>Public</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PUBLIC_VALUE
         * @generated
         * @ordered
         */
        PUBLIC, 
        /**
         * The '<em><b>Private</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PRIVATE_VALUE
         * @generated
         * @ordered
         */
        PRIVATE, 
        /**
         * The '<em><b>Protected</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PROTECTED_VALUE
         * @generated
         * @ordered
         */
        PROTECTED, 
        /**
         * The '<em><b>Package</b></em>' literal object.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #PACKAGE_VALUE
         * @generated
         * @ordered
         */
        PACKAGE
    }

    /** @ignore */
    export class VisibilityKind_$WRAPPER implements org.eclipse.emf.common.util.Enumerator {
        /**
         * The '<em><b>Public</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Named Element with public visibility is visible to all elements that can access the contents of the Namespace that owns it.
         * <!-- end-model-doc -->
         * @see #PUBLIC
         * @model name="public"
         * @generated
         * @ordered
         */
        public static PUBLIC_VALUE = 0;

        /**
         * The '<em><b>Private</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A NamedElement with private visibility is only visible inside the Namespace that owns it.
         * <!-- end-model-doc -->
         * @see #PRIVATE
         * @model name="private"
         * @generated
         * @ordered
         */
        public static PRIVATE_VALUE = 1;

        /**
         * The '<em><b>Protected</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A NamedElement with protected visibility is visible to Elements that have a generalization relationship to the Namespace that owns it.
         * <!-- end-model-doc -->
         * @see #PROTECTED
         * @model name="protected"
         * @generated
         * @ordered
         */
        public static PROTECTED_VALUE = 2;

        /**
         * The '<em><b>Package</b></em>' literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A NamedElement with package visibility is visible to all Elements within the nearest enclosing Package (given that other owning Elements have proper visibility). Outside the nearest enclosing Package, a NamedElement marked as having package visibility is not visible.  Only NamedElements that are not owned by Packages can be marked as having package visibility.
         * <!-- end-model-doc -->
         * @see #PACKAGE
         * @model name="package"
         * @generated
         * @ordered
         */
        public static PACKAGE_VALUE = 3;

        /**
         * An array of all the '<em><b>Visibility Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static VALUES_ARRAY; public static VALUES_ARRAY_$LI$() : VisibilityKind[] { if(VisibilityKind_$WRAPPER.VALUES_ARRAY == null) VisibilityKind_$WRAPPER.VALUES_ARRAY = [VisibilityKind.PUBLIC, VisibilityKind.PRIVATE, VisibilityKind.PROTECTED, VisibilityKind.PACKAGE]; return VisibilityKind_$WRAPPER.VALUES_ARRAY; };

        /**
         * A public read-only list of all the '<em><b>Visibility Kind</b></em>' enumerators.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static VALUES; public static VALUES_$LI$() : Array<VisibilityKind> { if(VisibilityKind_$WRAPPER.VALUES == null) VisibilityKind_$WRAPPER.VALUES = /* unmodifiableList *//* asList */VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$().slice(0).slice(0); return VisibilityKind_$WRAPPER.VALUES; };

        public static get$java_lang_String(literal) : VisibilityKind {
            for(let i = 0; i < VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.VisibilityKind["_$wrappers"][result].toString(),literal))) {
                    return result;
                }
            };
            return null;
        }

        /**
         * Returns the '<em><b>Visibility Kind</b></em>' literal with the specified literal value.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} literal the literal.
         * @return {uml.VisibilityKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static get(literal?) : any {
            if(((typeof literal === 'string') || literal === null)) {
                return <any>uml.VisibilityKind_$WRAPPER.get$java_lang_String(literal);
            } else if(((typeof literal === 'number') || literal === null)) {
                return <any>uml.VisibilityKind_$WRAPPER.get$int(literal);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the '<em><b>Visibility Kind</b></em>' literal with the specified name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} name the name.
         * @return {uml.VisibilityKind} the matching enumerator or <code>null</code>.
         * @generated
         */
        public static getByName(name) : VisibilityKind {
            for(let i = 0; i < VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$().length; ++i) {
                let result = VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$()[i];
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(uml.VisibilityKind["_$wrappers"][result].getName(),name))) {
                    return result;
                }
            };
            return null;
        }

        public static get$int(value) : VisibilityKind {
            switch((value)) {
            case 0 /* PUBLIC_VALUE */:
                return VisibilityKind.PUBLIC;
            case 1 /* PRIVATE_VALUE */:
                return VisibilityKind.PRIVATE;
            case 2 /* PROTECTED_VALUE */:
                return VisibilityKind.PROTECTED;
            case 3 /* PACKAGE_VALUE */:
                return VisibilityKind.PACKAGE;
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
    VisibilityKind["__class"] = "uml.VisibilityKind";
    VisibilityKind["__interfaces"] = ["org.eclipse.emf.common.util.Enumerator","java.lang.Comparable","java.io.Serializable"];

    VisibilityKind["_$wrappers"] = [new VisibilityKind_$WRAPPER(0, "PUBLIC", 0, "public", "public"), new VisibilityKind_$WRAPPER(1, "PRIVATE", 1, "private", "private"), new VisibilityKind_$WRAPPER(2, "PROTECTED", 2, "protected", "protected"), new VisibilityKind_$WRAPPER(3, "PACKAGE", 3, "package", "package")];

}


uml.VisibilityKind_$WRAPPER.VALUES_$LI$();

uml.VisibilityKind_$WRAPPER.VALUES_ARRAY_$LI$();
