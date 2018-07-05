/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class RequirementsAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.requirements.RequirementsPackage = null;

        public constructor() {
            super();
            if(RequirementsAdapterFactory.modelPackage == null) {
                RequirementsAdapterFactory.modelPackage = sysml.requirements.RequirementsPackage.eINSTANCE;
            }
        }

        /**
         * Returns whether this factory is applicable for the type of the object.
         * <!-- begin-user-doc -->
         * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
         * <!-- end-user-doc -->
         * @return {boolean} whether this factory is applicable for the type of the object.
         * @generated
         * @param {*} object
         */
        public isFactoryForType(object : any) : boolean {
            if(object === RequirementsAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === RequirementsAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : sysml.requirements.util.RequirementsSwitch<org.eclipse.emf.common.notify.Adapter> = new RequirementsAdapterFactory.RequirementsAdapterFactory$0(this);

        /**
         * Creates an adapter for the <code>target</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} target the object to adapt.
         * @return {*} the adapter for the <code>target</code>.
         * @generated
         */
        public createAdapter(target : org.eclipse.emf.common.notify.Notifier) : org.eclipse.emf.common.notify.Adapter {
            return this.modelSwitch.doSwitch(<org.eclipse.emf.ecore.EObject><any>target);
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.DeriveReqt
         * @generated
         */
        public createDeriveReqtAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.Verify
         * @generated
         */
        public createVerifyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.Copy
         * @generated
         */
        public createCopyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.Satisfy
         * @generated
         */
        public createSatisfyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.TestCase
         * @generated
         */
        public createTestCaseAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.Requirement
         * @generated
         */
        public createRequirementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.requirements.RequirementRelated
         * @generated
         */
        public createRequirementRelatedAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Trace
         * @generated
         */
        public createTraceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for the default case.
         * <!-- begin-user-doc -->
         * This default implementation returns null.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @generated
         */
        public createEObjectAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }
    }
    RequirementsAdapterFactory["__class"] = "sysml.requirements.util.RequirementsAdapterFactory";
    RequirementsAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace RequirementsAdapterFactory {

        export class RequirementsAdapterFactory$0 extends sysml.requirements.util.RequirementsSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDeriveReqt(object : sysml.requirements.DeriveReqt) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeriveReqtAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseVerify(object : sysml.requirements.Verify) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createVerifyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCopy(object : sysml.requirements.Copy) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCopyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSatisfy(object : sysml.requirements.Satisfy) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSatisfyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTestCase(object : sysml.requirements.TestCase) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTestCaseAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRequirement(object : sysml.requirements.Requirement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRequirementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRequirementRelated(object : sysml.requirements.RequirementRelated) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRequirementRelatedAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTrace(object : standard.Trace) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTraceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public defaultCase(object : org.eclipse.emf.ecore.EObject) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEObjectAdapter();
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }

    }

}

