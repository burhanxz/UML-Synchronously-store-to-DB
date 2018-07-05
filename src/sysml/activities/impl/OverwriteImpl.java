/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.activities.ActivitiesPackage;
import sysml.activities.Overwrite;

import uml.ObjectNode;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Overwrite</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.impl.OverwriteImpl#getBase_ObjectNode <em>Base Object Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class OverwriteImpl extends EStoreEObjectImpl implements Overwrite {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected OverwriteImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ActivitiesPackage.Literals.OVERWRITE;
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
		return (ObjectNode)eGet(ActivitiesPackage.Literals.OVERWRITE__BASE_OBJECT_NODE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ObjectNode(ObjectNode newBase_ObjectNode) {
		eSet(ActivitiesPackage.Literals.OVERWRITE__BASE_OBJECT_NODE, newBase_ObjectNode);
	}

} //OverwriteImpl
