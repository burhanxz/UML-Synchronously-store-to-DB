/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.ExpansionKind;
import uml.ExpansionNode;
import uml.ExpansionRegion;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Expansion Region</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ExpansionRegionImpl#getMode <em>Mode</em>}</li>
 *   <li>{@link uml.impl.ExpansionRegionImpl#getOutputElement <em>Output Element</em>}</li>
 *   <li>{@link uml.impl.ExpansionRegionImpl#getInputElement <em>Input Element</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ExpansionRegionImpl extends StructuredActivityNodeImpl implements ExpansionRegion {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ExpansionRegionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getExpansionRegion();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ExpansionKind getMode() {
		return (ExpansionKind)eGet(UmlPackage.eINSTANCE.getExpansionRegion_Mode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setMode(ExpansionKind newMode) {
		eSet(UmlPackage.eINSTANCE.getExpansionRegion_Mode(), newMode);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ExpansionNode> getOutputElement() {
		return (EList<ExpansionNode>)eGet(UmlPackage.eINSTANCE.getExpansionRegion_OutputElement(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ExpansionNode> getInputElement() {
		return (EList<ExpansionNode>)eGet(UmlPackage.eINSTANCE.getExpansionRegion_InputElement(), true);
	}

} //ExpansionRegionImpl
