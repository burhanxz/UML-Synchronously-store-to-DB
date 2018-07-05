/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.SpecificationImpl#getBase_Classifier}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class SpecificationImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Specification {
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
            return standard.StandardPackage.Literals.SPECIFICATION;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        eStaticFeatureCount() : number {
            return 0;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Classifier() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(standard.StandardPackage.Literals.SPECIFICATION__BASE_CLASSIFIER, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Classifier
         */
        public setBase_Classifier(newBase_Classifier : uml.Classifier) {
            this.eSet(standard.StandardPackage.Literals.SPECIFICATION__BASE_CLASSIFIER, newBase_Classifier);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public cannot_be_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, standard.util.StandardValidator.DIAGNOSTIC_SOURCE, standard.util.StandardValidator.SPECIFICATION__CANNOT_BE_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_be_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            case standard.StandardPackage.SPECIFICATION___CANNOT_BE_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.cannot_be_type(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    SpecificationImpl["__class"] = "standard.impl.SpecificationImpl";
    SpecificationImpl["__interfaces"] = ["standard.Specification","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

