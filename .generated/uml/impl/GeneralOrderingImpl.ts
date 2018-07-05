/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>General Ordering</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.GeneralOrderingImpl#getAfter}</li>
     * <li>{@link uml.impl.GeneralOrderingImpl#getBefore}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class GeneralOrderingImpl extends uml.impl.NamedElementImpl implements uml.GeneralOrdering {
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
            return uml.UmlPackage.eINSTANCE.getGeneralOrdering();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAfter() : uml.OccurrenceSpecification {
            return <uml.OccurrenceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralOrdering_After(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAfter
         */
        public setAfter(newAfter : uml.OccurrenceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralOrdering_After(), newAfter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBefore() : uml.OccurrenceSpecification {
            return <uml.OccurrenceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralOrdering_Before(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBefore
         */
        public setBefore(newBefore : uml.OccurrenceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralOrdering_Before(), newBefore);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public irreflexive_transitive_closure(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.GENERAL_ORDERING__IRREFLEXIVE_TRANSITIVE_CLOSURE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["irreflexive_transitive_closure", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.GENERAL_ORDERING___IRREFLEXIVE_TRANSITIVE_CLOSURE__DIAGNOSTICCHAIN_MAP:
                return this.irreflexive_transitive_closure(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    GeneralOrderingImpl["__class"] = "uml.impl.GeneralOrderingImpl";
    GeneralOrderingImpl["__interfaces"] = ["uml.GeneralOrdering","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

