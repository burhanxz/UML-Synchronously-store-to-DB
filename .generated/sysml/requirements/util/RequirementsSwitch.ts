/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class RequirementsSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.requirements.RequirementsPackage = null;

        public constructor() {
            super();
            if(RequirementsSwitch.modelPackage == null) {
                RequirementsSwitch.modelPackage = sysml.requirements.RequirementsPackage.eINSTANCE;
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
            return ePackage === RequirementsSwitch.modelPackage;
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
            case sysml.requirements.RequirementsPackage.DERIVE_REQT:
                {
                    let deriveReqt : sysml.requirements.DeriveReqt = <sysml.requirements.DeriveReqt><any>theEObject;
                    let result : T = this.caseDeriveReqt(deriveReqt);
                    if(result == null) result = this.caseTrace(deriveReqt);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.VERIFY:
                {
                    let verify : sysml.requirements.Verify = <sysml.requirements.Verify><any>theEObject;
                    let result : T = this.caseVerify(verify);
                    if(result == null) result = this.caseTrace(verify);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.COPY:
                {
                    let copy : sysml.requirements.Copy = <sysml.requirements.Copy><any>theEObject;
                    let result : T = this.caseCopy(copy);
                    if(result == null) result = this.caseTrace(copy);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.SATISFY:
                {
                    let satisfy : sysml.requirements.Satisfy = <sysml.requirements.Satisfy><any>theEObject;
                    let result : T = this.caseSatisfy(satisfy);
                    if(result == null) result = this.caseTrace(satisfy);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.TEST_CASE:
                {
                    let testCase : sysml.requirements.TestCase = <sysml.requirements.TestCase><any>theEObject;
                    let result : T = this.caseTestCase(testCase);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.REQUIREMENT:
                {
                    let requirement : sysml.requirements.Requirement = <sysml.requirements.Requirement><any>theEObject;
                    let result : T = this.caseRequirement(requirement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.requirements.RequirementsPackage.REQUIREMENT_RELATED:
                {
                    let requirementRelated : sysml.requirements.RequirementRelated = <sysml.requirements.RequirementRelated><any>theEObject;
                    let result : T = this.caseRequirementRelated(requirementRelated);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Derive Reqt</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Derive Reqt</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDeriveReqt(object : sysml.requirements.DeriveReqt) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Verify</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Verify</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseVerify(object : sysml.requirements.Verify) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Copy</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Copy</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCopy(object : sysml.requirements.Copy) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Satisfy</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Satisfy</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSatisfy(object : sysml.requirements.Satisfy) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Test Case</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Test Case</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTestCase(object : sysml.requirements.TestCase) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Requirement</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Requirement</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRequirement(object : sysml.requirements.Requirement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Requirement Related</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Requirement Related</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRequirementRelated(object : sysml.requirements.RequirementRelated) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Trace</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Trace</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTrace(object : standard.Trace) : T {
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
    RequirementsSwitch["__class"] = "sysml.requirements.util.RequirementsSwitch";

}

