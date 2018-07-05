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
import uml.Classifier;
import uml.Extension;
import uml.Interface;
import uml.InterfaceRealization;
import uml.Operation;
import uml.Reception;
import uml.Type;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Class</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ClassImpl#getClassifierBehavior <em>Classifier Behavior</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getInterfaceRealization <em>Interface Realization</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getOwnedBehavior <em>Owned Behavior</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getOwnedOperation <em>Owned Operation</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getExtension <em>Extension</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#isIsActive <em>Is Active</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getNestedClassifier <em>Nested Classifier</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getOwnedReception <em>Owned Reception</em>}</li>
 *   <li>{@link uml.impl.ClassImpl#getSuperClass <em>Super Class</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ClassImpl extends EncapsulatedClassifierImpl implements uml.Class {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ClassImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getClass_();
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
	public EList<Operation> getOwnedOperation() {
		return (EList<Operation>)eGet(UmlPackage.eINSTANCE.getClass_OwnedOperation(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Extension> getExtension() {
		return (EList<Extension>)eGet(UmlPackage.eINSTANCE.getClass_Extension(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsActive() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getClass_IsActive(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsActive(boolean newIsActive) {
		eSet(UmlPackage.eINSTANCE.getClass_IsActive(), newIsActive);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Classifier> getNestedClassifier() {
		return (EList<Classifier>)eGet(UmlPackage.eINSTANCE.getClass_NestedClassifier(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Reception> getOwnedReception() {
		return (EList<Reception>)eGet(UmlPackage.eINSTANCE.getClass_OwnedReception(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<uml.Class> getSuperClass() {
		return (EList<uml.Class>)eGet(UmlPackage.eINSTANCE.getClass_SuperClass(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean passive_class(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.CLASS__PASSIVE_CLASS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "passive_class", EObjectValidator.getObjectLabel(this, context) }),
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
	public Operation createOwnedOperation(String name, EList<String> parameterNames, EList<Type> parameterTypes, Type returnType) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isMetaclass() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Extension> getExtensions() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<uml.Class> getSuperClasses() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
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
				case UmlPackage.CLASS__CLASSIFIER_BEHAVIOR: return UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR;
				case UmlPackage.CLASS__INTERFACE_REALIZATION: return UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION;
				case UmlPackage.CLASS__OWNED_BEHAVIOR: return UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR;
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
				case UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR: return UmlPackage.CLASS__CLASSIFIER_BEHAVIOR;
				case UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION: return UmlPackage.CLASS__INTERFACE_REALIZATION;
				case UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR: return UmlPackage.CLASS__OWNED_BEHAVIOR;
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
				case UmlPackage.BEHAVIORED_CLASSIFIER___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP: return UmlPackage.CLASS___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.BEHAVIORED_CLASSIFIER___GET_ALL_IMPLEMENTED_INTERFACES: return UmlPackage.CLASS___GET_ALL_IMPLEMENTED_INTERFACES;
				case UmlPackage.BEHAVIORED_CLASSIFIER___GET_IMPLEMENTED_INTERFACES: return UmlPackage.CLASS___GET_IMPLEMENTED_INTERFACES;
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
			case UmlPackage.CLASS___PASSIVE_CLASS__DIAGNOSTICCHAIN_MAP:
				return passive_class((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.CLASS___CREATE_OWNED_OPERATION__STRING_ELIST_ELIST_TYPE:
				return createOwnedOperation((String)arguments.get(0), (EList<String>)arguments.get(1), (EList<Type>)arguments.get(2), (Type)arguments.get(3));
			case UmlPackage.CLASS___IS_METACLASS:
				return isMetaclass();
			case UmlPackage.CLASS___GET_EXTENSIONS:
				return getExtensions();
			case UmlPackage.CLASS___GET_SUPER_CLASSES:
				return getSuperClasses();
			case UmlPackage.CLASS___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
				return class_behavior((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.CLASS___GET_ALL_IMPLEMENTED_INTERFACES:
				return getAllImplementedInterfaces();
			case UmlPackage.CLASS___GET_IMPLEMENTED_INTERFACES:
				return getImplementedInterfaces();
		}
		return super.eInvoke(operationID, arguments);
	}

} //ClassImpl
