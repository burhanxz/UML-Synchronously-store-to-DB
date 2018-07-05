/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class ModelelementsSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.modelelements.ModelelementsPackage = null;

        public constructor() {
            super();
            if(ModelelementsSwitch.modelPackage == null) {
                ModelelementsSwitch.modelPackage = sysml.modelelements.ModelelementsPackage.eINSTANCE;
            }
        }

        /**
         * Checks whether this is a switch for the given package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} ePackage the package in question.
         * @return {boolean} whether this is a switch for the given package.
         * @generated
         */
        isSwitchFor(ePackage : org.eclipse.emf.ecore.EPackage) : boolean {
            return ePackage === ModelelementsSwitch.modelPackage;
        }

        /**
         * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the first non-null result returned by a <code>caseXXX</code> call.
         * @generated
         * @param {number} classifierID
         * @param {*} theEObject
         */
        doSwitch(classifierID : number, theEObject : org.eclipse.emf.ecore.EObject) : T {
            switch((classifierID)) {
            case sysml.modelelements.ModelelementsPackage.CONFORM:
                {
                    let conform : sysml.modelelements.Conform = <sysml.modelelements.Conform><any>theEObject;
                    let result : T = this.caseConform(conform);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.modelelements.ModelelementsPackage.VIEW:
                {
                    let view : sysml.modelelements.View = <sysml.modelelements.View><any>theEObject;
                    let result : T = this.caseView(view);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.modelelements.ModelelementsPackage.VIEW_POINT:
                {
                    let viewPoint : sysml.modelelements.ViewPoint = <sysml.modelelements.ViewPoint><any>theEObject;
                    let result : T = this.caseViewPoint(viewPoint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.modelelements.ModelelementsPackage.RATIONALE:
                {
                    let rationale : sysml.modelelements.Rationale = <sysml.modelelements.Rationale><any>theEObject;
                    let result : T = this.caseRationale(rationale);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.modelelements.ModelelementsPackage.PROBLEM:
                {
                    let problem : sysml.modelelements.Problem = <sysml.modelelements.Problem><any>theEObject;
                    let result : T = this.caseProblem(problem);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Conform</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Conform</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConform(object : sysml.modelelements.Conform) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>View</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>View</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseView(object : sysml.modelelements.View) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>View Point</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>View Point</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseViewPoint(object : sysml.modelelements.ViewPoint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Rationale</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Rationale</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRationale(object : sysml.modelelements.Rationale) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Problem</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Problem</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProblem(object : sysml.modelelements.Problem) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch, but this is the last case anyway.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>EObject</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject)
         * @generated
         */
        public defaultCase(object : org.eclipse.emf.ecore.EObject) : T {
            return null;
        }
    }
    ModelelementsSwitch["__class"] = "sysml.modelelements.util.ModelelementsSwitch";

}

