/**
 */
package sysml.portandflows.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import core.store.MyStore;
import sysml.portandflows.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class PortandflowsFactoryImpl extends EFactoryImpl implements PortandflowsFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static PortandflowsFactory init() {
		try {
			PortandflowsFactory thePortandflowsFactory = (PortandflowsFactory)EPackage.Registry.INSTANCE.getEFactory(PortandflowsPackage.eNS_URI);
			if (thePortandflowsFactory != null) {
				return thePortandflowsFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new PortandflowsFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PortandflowsFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
 
	public EObject createGen(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case PortandflowsPackage.FLOW_PORT: return createFlowPort();
			case PortandflowsPackage.FLOW_PROPERTY: return createFlowProperty();
			case PortandflowsPackage.FLOW_SPECIFICATION: return createFlowSpecification();
			case PortandflowsPackage.ITEM_FLOW: return createItemFlow();
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
	@Override
	public Object createFromString(EDataType eDataType, String initialValue) {
		switch (eDataType.getClassifierID()) {
			case PortandflowsPackage.FLOW_DIRECTION:
				return createFlowDirectionFromString(eDataType, initialValue);
			default:
				throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String convertToString(EDataType eDataType, Object instanceValue) {
		switch (eDataType.getClassifierID()) {
			case PortandflowsPackage.FLOW_DIRECTION:
				return convertFlowDirectionToString(eDataType, instanceValue);
			default:
				throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowPort createFlowPort() {
		FlowPortImpl flowPort = new FlowPortImpl();
		return flowPort;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowProperty createFlowProperty() {
		FlowPropertyImpl flowProperty = new FlowPropertyImpl();
		return flowProperty;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowSpecification createFlowSpecification() {
		FlowSpecificationImpl flowSpecification = new FlowSpecificationImpl();
		return flowSpecification;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ItemFlow createItemFlow() {
		ItemFlowImpl itemFlow = new ItemFlowImpl();
		return itemFlow;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowDirection createFlowDirectionFromString(EDataType eDataType, String initialValue) {
		FlowDirection result = FlowDirection.get(initialValue);
		if (result == null) throw new IllegalArgumentException("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertFlowDirectionToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PortandflowsPackage getPortandflowsPackage() {
		return (PortandflowsPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static PortandflowsPackage getPackage() {
		return PortandflowsPackage.eINSTANCE;
	}

} //PortandflowsFactoryImpl
