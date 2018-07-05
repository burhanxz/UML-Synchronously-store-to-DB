/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Block</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.BlockImpl#isIsEncapsulated}</li>
     * <li>{@link sysml.blocks.impl.BlockImpl#getBase_Class}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class BlockImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.Block {
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
            return sysml.blocks.BlocksPackage.Literals.BLOCK;
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
         * @return {boolean}
         */
        public isIsEncapsulated() : boolean {
            return <boolean>this.eGet(sysml.blocks.BlocksPackage.Literals.BLOCK__IS_ENCAPSULATED, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsEncapsulated
         */
        public setIsEncapsulated(newIsEncapsulated : boolean) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.BLOCK__IS_ENCAPSULATED, newIsEncapsulated);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Class() : uml.Class {
            return <uml.Class><any>this.eGet(sysml.blocks.BlocksPackage.Literals.BLOCK__BASE_CLASS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Class
         */
        public setBase_Class(newBase_Class : uml.Class) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.BLOCK__BASE_CLASS, newBase_Class);
        }
    }
    BlockImpl["__class"] = "sysml.blocks.impl.BlockImpl";
    BlockImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.blocks.Block","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

