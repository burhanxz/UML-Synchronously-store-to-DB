/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Literal Unlimited Natural</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LiteralUnlimitedNaturalImpl#getValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.LiteralSpecificationImpl
     * @class
     */
    export class LiteralUnlimitedNaturalImpl extends uml.impl.LiteralSpecificationImpl implements uml.LiteralUnlimitedNatural {
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
            return uml.UmlPackage.eINSTANCE.getLiteralUnlimitedNatural();
        }

        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                super.getValue(stereotype, propertyName);
            } else if(stereotype === undefined && propertyName === undefined) {
                return <any>this.getValue$();
            } else throw new Error('invalid overload');
        }

        public getValue$() : number {
            return <number>this.eGet(uml.UmlPackage.eINSTANCE.getLiteralUnlimitedNatural_Value(), true);
        }

        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                super.setValue(stereotype, propertyName, newValue);
            } else if(((typeof stereotype === 'number') || stereotype === null) && propertyName === undefined && newValue === undefined) {
                return <any>this.setValue$int(stereotype);
            } else throw new Error('invalid overload');
        }

        public setValue$int(newValue : number) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLiteralUnlimitedNatural_Value(), newValue);
        }
    }
    LiteralUnlimitedNaturalImpl["__class"] = "uml.impl.LiteralUnlimitedNaturalImpl";
    LiteralUnlimitedNaturalImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.LiteralSpecification","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.LiteralUnlimitedNatural","org.eclipse.emf.ecore.InternalEObject"];


}

