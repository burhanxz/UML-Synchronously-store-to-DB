/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class ActivitiesSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.activities.ActivitiesPackage = null;

        public constructor() {
            super();
            if(ActivitiesSwitch.modelPackage == null) {
                ActivitiesSwitch.modelPackage = sysml.activities.ActivitiesPackage.eINSTANCE;
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
            return ePackage === ActivitiesSwitch.modelPackage;
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
            case sysml.activities.ActivitiesPackage.OPTIONAL:
                {
                    let optional : sysml.activities.Optional = <sysml.activities.Optional><any>theEObject;
                    let result : T = this.caseOptional(optional);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.RATE:
                {
                    let rate : sysml.activities.Rate = <sysml.activities.Rate><any>theEObject;
                    let result : T = this.caseRate(rate);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.PROBABILITY:
                {
                    let probability : sysml.activities.Probability = <sysml.activities.Probability><any>theEObject;
                    let result : T = this.caseProbability(probability);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.CONTINUOUS:
                {
                    let continuous : sysml.activities.Continuous = <sysml.activities.Continuous><any>theEObject;
                    let result : T = this.caseContinuous(continuous);
                    if(result == null) result = this.caseRate(continuous);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.DISCRETE:
                {
                    let discrete : sysml.activities.Discrete = <sysml.activities.Discrete><any>theEObject;
                    let result : T = this.caseDiscrete(discrete);
                    if(result == null) result = this.caseRate(discrete);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.CONTROL_OPERATOR:
                {
                    let controlOperator : sysml.activities.ControlOperator = <sysml.activities.ControlOperator><any>theEObject;
                    let result : T = this.caseControlOperator(controlOperator);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.NO_BUFFER:
                {
                    let noBuffer : sysml.activities.NoBuffer = <sysml.activities.NoBuffer><any>theEObject;
                    let result : T = this.caseNoBuffer(noBuffer);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.activities.ActivitiesPackage.OVERWRITE:
                {
                    let overwrite : sysml.activities.Overwrite = <sysml.activities.Overwrite><any>theEObject;
                    let result : T = this.caseOverwrite(overwrite);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Optional</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Optional</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOptional(object : sysml.activities.Optional) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Rate</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Rate</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRate(object : sysml.activities.Rate) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Probability</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Probability</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProbability(object : sysml.activities.Probability) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Continuous</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Continuous</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseContinuous(object : sysml.activities.Continuous) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Discrete</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Discrete</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDiscrete(object : sysml.activities.Discrete) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Control Operator</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Control Operator</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseControlOperator(object : sysml.activities.ControlOperator) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>No Buffer</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>No Buffer</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseNoBuffer(object : sysml.activities.NoBuffer) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Overwrite</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Overwrite</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOverwrite(object : sysml.activities.Overwrite) : T {
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
    ActivitiesSwitch["__class"] = "sysml.activities.util.ActivitiesSwitch";

}

