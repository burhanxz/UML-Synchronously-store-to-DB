/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Time Constraint</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TimeConstraintImpl#isFirstEvent}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.IntervalConstraintImpl
     * @class
     */
    export class TimeConstraintImpl extends uml.impl.IntervalConstraintImpl implements uml.TimeConstraint {
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
            return uml.UmlPackage.eINSTANCE.getTimeConstraint();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isFirstEvent() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getTimeConstraint_FirstEvent(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newFirstEvent
         */
        public setFirstEvent(newFirstEvent : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTimeConstraint_FirstEvent(), newFirstEvent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public has_one_constrainedElement(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TIME_CONSTRAINT__HAS_ONE_CONSTRAINED_ELEMENT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["has_one_constrainedElement", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TIME_CONSTRAINT___HAS_ONE_CONSTRAINED_ELEMENT__DIAGNOSTICCHAIN_MAP:
                return this.has_one_constrainedElement(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TimeConstraintImpl["__class"] = "uml.impl.TimeConstraintImpl";
    TimeConstraintImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.IntervalConstraint","uml.ParameterableElement","uml.PackageableElement","uml.TimeConstraint","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Constraint","org.eclipse.emf.ecore.InternalEObject"];


}

