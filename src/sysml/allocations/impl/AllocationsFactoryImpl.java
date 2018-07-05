/**
 */
package sysml.allocations.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import a.store.MyStore;
import sysml.allocations.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class AllocationsFactoryImpl extends EFactoryImpl implements AllocationsFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static AllocationsFactory init() {
		try {
			AllocationsFactory theAllocationsFactory = (AllocationsFactory)EPackage.Registry.INSTANCE.getEFactory(AllocationsPackage.eNS_URI);
			if (theAllocationsFactory != null) {
				return theAllocationsFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new AllocationsFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public AllocationsFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
 
	public EObject createGen(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case AllocationsPackage.ALLOCATE: return createAllocate();
			case AllocationsPackage.ALLOCATED: return createAllocated();
			case AllocationsPackage.ALLOCATE_ACTIVITY_PARTITION: return createAllocateActivityPartition();
			default:
				throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	@Override
	public EObject create(EClass eClass){

		InternalEObject newObject = (InternalEObject) createGen(eClass);
		
		newObject.eSetStore(MyStore.INSTANCE);
		
		return newObject;
	}
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Allocate createAllocate() {
		AllocateImpl allocate = new AllocateImpl();
		return allocate;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Allocated createAllocated() {
		AllocatedImpl allocated = new AllocatedImpl();
		return allocated;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public AllocateActivityPartition createAllocateActivityPartition() {
		AllocateActivityPartitionImpl allocateActivityPartition = new AllocateActivityPartitionImpl();
		return allocateActivityPartition;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public AllocationsPackage getAllocationsPackage() {
		return (AllocationsPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static AllocationsPackage getPackage() {
		return AllocationsPackage.eINSTANCE;
	}

} //AllocationsFactoryImpl
