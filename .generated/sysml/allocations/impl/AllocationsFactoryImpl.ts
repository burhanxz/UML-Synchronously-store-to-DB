/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class AllocationsFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.allocations.AllocationsFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.allocations.AllocationsFactory {
            try {
                let theAllocationsFactory : sysml.allocations.AllocationsFactory = <sysml.allocations.AllocationsFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.allocations.AllocationsPackage.eNS_URI);
                if(theAllocationsFactory != null) {
                    return theAllocationsFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new AllocationsFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public createGen(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            case sysml.allocations.AllocationsPackage.ALLOCATE:
                return this.createAllocate();
            case sysml.allocations.AllocationsPackage.ALLOCATED:
                return this.createAllocated();
            case sysml.allocations.AllocationsPackage.ALLOCATE_ACTIVITY_PARTITION:
                return this.createAllocateActivityPartition();
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let newObject : org.eclipse.emf.ecore.InternalEObject = <org.eclipse.emf.ecore.InternalEObject><any>this.createGen(eClass);
            newObject.eSetStore(a.store.MyStore.INSTANCE_$LI$());
            return newObject;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAllocate() : sysml.allocations.Allocate {
            let allocate : sysml.allocations.impl.AllocateImpl = new sysml.allocations.impl.AllocateImpl();
            return allocate;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAllocated() : sysml.allocations.Allocated {
            let allocated : sysml.allocations.impl.AllocatedImpl = new sysml.allocations.impl.AllocatedImpl();
            return allocated;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAllocateActivityPartition() : sysml.allocations.AllocateActivityPartition {
            let allocateActivityPartition : sysml.allocations.impl.AllocateActivityPartitionImpl = new sysml.allocations.impl.AllocateActivityPartitionImpl();
            return allocateActivityPartition;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocationsPackage() : sysml.allocations.AllocationsPackage {
            return <sysml.allocations.AllocationsPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.allocations.AllocationsPackage {
            return sysml.allocations.AllocationsPackage.eINSTANCE;
        }
    }
    AllocationsFactoryImpl["__class"] = "sysml.allocations.impl.AllocationsFactoryImpl";
    AllocationsFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","sysml.allocations.AllocationsFactory","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

