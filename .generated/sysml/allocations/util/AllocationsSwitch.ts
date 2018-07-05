/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class AllocationsSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.allocations.AllocationsPackage = null;

        public constructor() {
            super();
            if(AllocationsSwitch.modelPackage == null) {
                AllocationsSwitch.modelPackage = sysml.allocations.AllocationsPackage.eINSTANCE;
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
            return ePackage === AllocationsSwitch.modelPackage;
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
            case sysml.allocations.AllocationsPackage.ALLOCATE:
                {
                    let allocate : sysml.allocations.Allocate = <sysml.allocations.Allocate><any>theEObject;
                    let result : T = this.caseAllocate(allocate);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.allocations.AllocationsPackage.ALLOCATED:
                {
                    let allocated : sysml.allocations.Allocated = <sysml.allocations.Allocated><any>theEObject;
                    let result : T = this.caseAllocated(allocated);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.allocations.AllocationsPackage.ALLOCATE_ACTIVITY_PARTITION:
                {
                    let allocateActivityPartition : sysml.allocations.AllocateActivityPartition = <sysml.allocations.AllocateActivityPartition><any>theEObject;
                    let result : T = this.caseAllocateActivityPartition(allocateActivityPartition);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Allocate</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Allocate</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAllocate(object : sysml.allocations.Allocate) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Allocated</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Allocated</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAllocated(object : sysml.allocations.Allocated) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Allocate Activity Partition</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Allocate Activity Partition</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAllocateActivityPartition(object : sysml.allocations.AllocateActivityPartition) : T {
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
    AllocationsSwitch["__class"] = "sysml.allocations.util.AllocationsSwitch";

}

