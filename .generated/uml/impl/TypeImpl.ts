/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Type</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TypeImpl#getPackage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageableElementImpl
     * @class
     */
    export abstract class TypeImpl extends uml.impl.PackageableElementImpl implements uml.Type {
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
            return uml.UmlPackage.eINSTANCE.getType();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getType_Package(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPackage
         */
        public setPackage(newPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getType_Package(), newPackage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} end1IsNavigable
         * @param {uml.AggregationKind} end1Aggregation
         * @param {string} end1Name
         * @param {number} end1Lower
         * @param {number} end1Upper
         * @param {*} end1Type
         * @param {boolean} end2IsNavigable
         * @param {uml.AggregationKind} end2Aggregation
         * @param {string} end2Name
         * @param {number} end2Lower
         * @param {number} end2Upper
         * @return {*}
         */
        public createAssociation(end1IsNavigable : boolean, end1Aggregation : uml.AggregationKind, end1Name : string, end1Lower : number, end1Upper : number, end1Type : uml.Type, end2IsNavigable : boolean, end2Aggregation : uml.AggregationKind, end2Name : string, end2Lower : number, end2Upper : number) : uml.Association {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAssociations() : org.eclipse.emf.common.util.EList<uml.Association> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} other
         * @return {boolean}
         */
        public conformsTo(other : uml.Type) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.TYPE___CREATE_ASSOCIATION__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_TYPE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT:
                return this.createAssociation(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3), <any>__arguments.get(4), <any>__arguments.get(5), <any>__arguments.get(6), <any>__arguments.get(7), <any>__arguments.get(8), <any>__arguments.get(9), <any>__arguments.get(10));
            case uml.UmlPackage.TYPE___GET_ASSOCIATIONS:
                return this.getAssociations();
            case uml.UmlPackage.TYPE___CONFORMS_TO__TYPE:
                return this.conformsTo(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TypeImpl["__class"] = "uml.impl.TypeImpl";
    TypeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

