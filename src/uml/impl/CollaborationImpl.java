/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import java.util.Map;

import org.eclipse.emf.common.util.BasicDiagnostic;
import org.eclipse.emf.common.util.Diagnostic;
import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import org.eclipse.emf.ecore.util.EObjectValidator;

import uml.Behavior;
import uml.BehavioredClassifier;
import uml.Collaboration;
import uml.ConnectableElement;
import uml.Interface;
import uml.InterfaceRealization;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Collaboration</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.CollaborationImpl#getClassifierBehavior <em>Classifier Behavior</em>}</li>
 *   <li>{@link uml.impl.CollaborationImpl#getInterfaceRealization <em>Interface Realization</em>}</li>
 *   <li>{@link uml.impl.CollaborationImpl#getOwnedBehavior <em>Owned Behavior</em>}</li>
 *   <li>{@link uml.impl.CollaborationImpl#getCollaborationRole <em>Collaboration Role</em>}</li>
 * </ul>
 *
 * @generated
 */
public class CollaborationImpl extends StructuredClassifierImpl implements Collaboration {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected CollaborationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getCollaboration();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getClassifierBehavior() {
		return (Behavior)eGet(UmlPackage.eINSTANCE.getBehavioredClassifier_ClassifierBehavior(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setClassifierBehavior(Behavior newClassifierBehavior) {
		eSet(UmlPackage.eINSTANCE.getBehavioredClassifier_ClassifierBehavior(), newClassifierBehavior);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InterfaceRealization> getInterfaceRealization() {
		return (EList<InterfaceRealization>)eGet(UmlPackage.eINSTANCE.getBehavioredClassifier_InterfaceRealization(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Behavior> getOwnedBehavior() {
		return (EList<Behavior>)eGet(UmlPackage.eINSTANCE.getBehavioredClassifier_OwnedBehavior(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ConnectableElement> getCollaborationRole() {
		return (EList<ConnectableElement>)eGet(UmlPackage.eINSTANCE.getCollaboration_CollaborationRole(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean class_behavior(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.BEHAVIORED_CLASSIFIER__CLASS_BEHAVIOR,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "class_behavior", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Interface> getAllImplementedInterfaces() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Interface> getImplementedInterfaces() {
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
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == BehavioredClassifier.class) {
			switch (derivedFeatureID) {
				case UmlPackage.COLLABORATION__CLASSIFIER_BEHAVIOR: return UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR;
				case UmlPackage.COLLABORATION__INTERFACE_REALIZATION: return UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION;
				case UmlPackage.COLLABORATION__OWNED_BEHAVIOR: return UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR;
				default: return -1;
			}
		}
		return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedStructuralFeatureID(int baseFeatureID, Class<?> baseClass) {
		if (baseClass == BehavioredClassifier.class) {
			switch (baseFeatureID) {
				case UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR: return UmlPackage.COLLABORATION__CLASSIFIER_BEHAVIOR;
				case UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION: return UmlPackage.COLLABORATION__INTERFACE_REALIZATION;
				case UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR: return UmlPackage.COLLABORATION__OWNED_BEHAVIOR;
				default: return -1;
			}
		}
		return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedOperationID(int baseOperationID, Class<?> baseClass) {
		if (baseClass == BehavioredClassifier.class) {
			switch (baseOperationID) {
				case UmlPackage.BEHAVIORED_CLASSIFIER___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP: return UmlPackage.COLLABORATION___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.BEHAVIORED_CLASSIFIER___GET_ALL_IMPLEMENTED_INTERFACES: return UmlPackage.COLLABORATION___GET_ALL_IMPLEMENTED_INTERFACES;
				case UmlPackage.BEHAVIORED_CLASSIFIER___GET_IMPLEMENTED_INTERFACES: return UmlPackage.COLLABORATION___GET_IMPLEMENTED_INTERFACES;
				default: return -1;
			}
		}
		return super.eDerivedOperationID(baseOperationID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.COLLABORATION___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
				return class_behavior((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.COLLABORATION___GET_ALL_IMPLEMENTED_INTERFACES:
				return getAllImplementedInterfaces();
			case UmlPackage.COLLABORATION___GET_IMPLEMENTED_INTERFACES:
				return getImplementedInterfaces();
		}
		return super.eInvoke(operationID, arguments);
	}

} //CollaborationImpl
