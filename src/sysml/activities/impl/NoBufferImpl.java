/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.activities.ActivitiesPackage;
import sysml.activities.NoBuffer;

import uml.ObjectNode;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>No Buffer</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.impl.NoBufferImpl#getBase_ObjectNode <em>Base Object Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class NoBufferImpl extends EStoreEObjectImpl implements NoBuffer {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected NoBufferImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ActivitiesPackage.Literals.NO_BUFFER;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected int eStaticFeatureCount() {
		return 0;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ObjectNode getBase_ObjectNode() {
		return (ObjectNode)eGet(ActivitiesPackage.Literals.NO_BUFFER__BASE_OBJECT_NODE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ObjectNode(ObjectNode newBase_ObjectNode) {
		eSet(ActivitiesPackage.Literals.NO_BUFFER__BASE_OBJECT_NODE, newBase_ObjectNode);
	}

} //NoBufferImpl
