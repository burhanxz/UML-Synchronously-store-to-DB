/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class ConstraintsSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.constraints.ConstraintsPackage = null;

        public constructor() {
            super();
            if(ConstraintsSwitch.modelPackage == null) {
                ConstraintsSwitch.modelPackage = sysml.constraints.ConstraintsPackage.eINSTANCE;
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
            return ePackage === ConstraintsSwitch.modelPackage;
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
            case sysml.constraints.ConstraintsPackage.CONSTRAINT_BLOCK:
                {
                    let constraintBlock : sysml.constraints.ConstraintBlock = <sysml.constraints.ConstraintBlock><any>theEObject;
                    let result : T = this.caseConstraintBlock(constraintBlock);
                    if(result == null) result = this.caseBlock(constraintBlock);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.constraints.ConstraintsPackage.CONSTRAINT_PROPERTY:
                {
                    let constraintProperty : sysml.constraints.ConstraintProperty = <sysml.constraints.ConstraintProperty><any>theEObject;
                    let result : T = this.caseConstraintProperty(constraintProperty);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Constraint Block</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Constraint Block</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConstraintBlock(object : sysml.constraints.ConstraintBlock) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Constraint Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Constraint Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConstraintProperty(object : sysml.constraints.ConstraintProperty) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Block</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Block</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBlock(object : sysml.blocks.Block) : T {
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
    ConstraintsSwitch["__class"] = "sysml.constraints.util.ConstraintsSwitch";

}

