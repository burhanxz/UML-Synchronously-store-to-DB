/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.ConnectableElement;
import uml.Connector;
import uml.Property;
import uml.StructuredClassifier;
import uml.Type;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Structured Classifier</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.StructuredClassifierImpl#getOwnedAttribute <em>Owned Attribute</em>}</li>
 *   <li>{@link uml.impl.StructuredClassifierImpl#getOwnedConnector <em>Owned Connector</em>}</li>
 *   <li>{@link uml.impl.StructuredClassifierImpl#getPart <em>Part</em>}</li>
 *   <li>{@link uml.impl.StructuredClassifierImpl#getRole <em>Role</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class StructuredClassifierImpl extends ClassifierImpl implements StructuredClassifier {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected StructuredClassifierImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getStructuredClassifier();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getOwnedAttribute() {
		return (EList<Property>)eGet(UmlPackage.eINSTANCE.getStructuredClassifier_OwnedAttribute(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Connector> getOwnedConnector() {
		return (EList<Connector>)eGet(UmlPackage.eINSTANCE.getStructuredClassifier_OwnedConnector(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getPart() {
		return (EList<Property>)eGet(UmlPackage.eINSTANCE.getStructuredClassifier_Part(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ConnectableElement> getRole() {
		return (EList<ConnectableElement>)eGet(UmlPackage.eINSTANCE.getStructuredClassifier_Role(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Property createOwnedAttribute(String name, Type type, int lower, int upper) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Property> getParts() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<ConnectableElement> allRoles() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.STRUCTURED_CLASSIFIER___CREATE_OWNED_ATTRIBUTE__STRING_TYPE_INT_INT:
				return createOwnedAttribute((String)arguments.get(0), (Type)arguments.get(1), (Integer)arguments.get(2), (Integer)arguments.get(3));
			case UmlPackage.STRUCTURED_CLASSIFIER___GET_PARTS:
				return getParts();
			case UmlPackage.STRUCTURED_CLASSIFIER___ALL_ROLES:
				return allRoles();
		}
		return super.eInvoke(operationID, arguments);
	}

} //StructuredClassifierImpl
