/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.ExecutableNode;
import uml.SequenceNode;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Sequence Node</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.SequenceNodeImpl#getExecutableNode <em>Executable Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class SequenceNodeImpl extends StructuredActivityNodeImpl implements SequenceNode {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected SequenceNodeImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getSequenceNode();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ExecutableNode> getExecutableNode() {
		return (EList<ExecutableNode>)eGet(UmlPackage.eINSTANCE.getSequenceNode_ExecutableNode(), true);
	}

} //SequenceNodeImpl
