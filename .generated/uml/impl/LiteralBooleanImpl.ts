/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Literal Boolean</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LiteralBooleanImpl#isValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.LiteralSpecificationImpl
     * @class
     */
    export class LiteralBooleanImpl extends uml.impl.LiteralSpecificationImpl implements uml.LiteralBoolean {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return uml.UmlPackage.eINSTANCE.getLiteralBoolean();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isValue() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getLiteralBoolean_Value(), true);
        }

        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                super.setValue(stereotype, propertyName, newValue);
            } else if(((typeof stereotype === 'boolean') || stereotype === null) && propertyName === undefined && newValue === undefined) {
                return <any>this.setValue$boolean(stereotype);
            } else throw new Error('invalid overload');
        }

        public setValue$boolean(newValue : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLiteralBoolean_Value(), newValue);
        }
    }
    LiteralBooleanImpl["__class"] = "uml.impl.LiteralBooleanImpl";
    LiteralBooleanImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","uml.LiteralBoolean","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.LiteralSpecification","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

