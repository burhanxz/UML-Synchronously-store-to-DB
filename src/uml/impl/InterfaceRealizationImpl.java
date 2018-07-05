/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.BehavioredClassifier;
import uml.Interface;
import uml.InterfaceRealization;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Interface Realization</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.InterfaceRealizationImpl#getContract <em>Contract</em>}</li>
 *   <li>{@link uml.impl.InterfaceRealizationImpl#getImplementingClassifier <em>Implementing Classifier</em>}</li>
 * </ul>
 *
 * @generated
 */
public class InterfaceRealizationImpl extends RealizationImpl implements InterfaceRealization {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected InterfaceRealizationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInterfaceRealization();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Interface getContract() {
		return (Interface)eGet(UmlPackage.eINSTANCE.getInterfaceRealization_Contract(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setContract(Interface newContract) {
		eSet(UmlPackage.eINSTANCE.getInterfaceRealization_Contract(), newContract);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BehavioredClassifier getImplementingClassifier() {
		return (BehavioredClassifier)eGet(UmlPackage.eINSTANCE.getInterfaceRealization_ImplementingClassifier(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setImplementingClassifier(BehavioredClassifier newImplementingClassifier) {
		eSet(UmlPackage.eINSTANCE.getInterfaceRealization_ImplementingClassifier(), newImplementingClassifier);
	}

} //InterfaceRealizationImpl
