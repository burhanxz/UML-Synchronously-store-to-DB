/**
 */
package sysml.blocks.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.blocks.BlocksPackage;
import sysml.blocks.ParticipantProperty;

import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Participant Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.impl.ParticipantPropertyImpl#getBase_Property <em>Base Property</em>}</li>
 *   <li>{@link sysml.blocks.impl.ParticipantPropertyImpl#getEnd <em>End</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ParticipantPropertyImpl extends EStoreEObjectImpl implements ParticipantProperty {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ParticipantPropertyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BlocksPackage.Literals.PARTICIPANT_PROPERTY;
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
	public Property getBase_Property() {
		return (Property)eGet(BlocksPackage.Literals.PARTICIPANT_PROPERTY__BASE_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Property(Property newBase_Property) {
		eSet(BlocksPackage.Literals.PARTICIPANT_PROPERTY__BASE_PROPERTY, newBase_Property);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Property getEnd() {
		return (Property)eGet(BlocksPackage.Literals.PARTICIPANT_PROPERTY__END, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEnd(Property newEnd) {
		eSet(BlocksPackage.Literals.PARTICIPANT_PROPERTY__END, newEnd);
	}

} //ParticipantPropertyImpl
