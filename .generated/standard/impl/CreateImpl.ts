/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Create</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.CreateImpl#getBase_BehavioralFeature}</li>
     * <li>{@link standard.impl.CreateImpl#getBase_Usage}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class CreateImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Create {
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
            return standard.StandardPackage.Literals.CREATE;
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
        public getBase_BehavioralFeature() : uml.BehavioralFeature {
            return <uml.BehavioralFeature><any>this.eGet(standard.StandardPackage.Literals.CREATE__BASE_BEHAVIORAL_FEATURE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_BehavioralFeature
         */
        public setBase_BehavioralFeature(newBase_BehavioralFeature : uml.BehavioralFeature) {
            this.eSet(standard.StandardPackage.Literals.CREATE__BASE_BEHAVIORAL_FEATURE, newBase_BehavioralFeature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Usage() : uml.Usage {
            return <uml.Usage><any>this.eGet(standard.StandardPackage.Literals.CREATE__BASE_USAGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Usage
         */
        public setBase_Usage(newBase_Usage : uml.Usage) {
            this.eSet(standard.StandardPackage.Literals.CREATE__BASE_USAGE, newBase_Usage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public client_and_supplier_are_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, standard.util.StandardValidator.DIAGNOSTIC_SOURCE, standard.util.StandardValidator.CREATE__CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["client_and_supplier_are_classifiers", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case standard.StandardPackage.CREATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP:
                return this.client_and_supplier_are_classifiers(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    CreateImpl["__class"] = "standard.impl.CreateImpl";
    CreateImpl["__interfaces"] = ["standard.Create","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

