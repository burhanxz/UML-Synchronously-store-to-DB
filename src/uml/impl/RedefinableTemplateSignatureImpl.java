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

import uml.Classifier;
import uml.RedefinableTemplateSignature;
import uml.TemplateParameter;
import uml.TemplateSignature;
import uml.TemplateableElement;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Redefinable Template Signature</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getParameter <em>Parameter</em>}</li>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getTemplate <em>Template</em>}</li>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getOwnedParameter <em>Owned Parameter</em>}</li>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getExtendedSignature <em>Extended Signature</em>}</li>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getInheritedParameter <em>Inherited Parameter</em>}</li>
 *   <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getClassifier <em>Classifier</em>}</li>
 * </ul>
 *
 * @generated
 */
public class RedefinableTemplateSignatureImpl extends RedefinableElementImpl implements RedefinableTemplateSignature {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected RedefinableTemplateSignatureImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getRedefinableTemplateSignature();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<TemplateParameter> getParameter() {
		return (EList<TemplateParameter>)eGet(UmlPackage.eINSTANCE.getTemplateSignature_Parameter(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public TemplateableElement getTemplate() {
		return (TemplateableElement)eGet(UmlPackage.eINSTANCE.getTemplateSignature_Template(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTemplate(TemplateableElement newTemplate) {
		eSet(UmlPackage.eINSTANCE.getTemplateSignature_Template(), newTemplate);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<TemplateParameter> getOwnedParameter() {
		return (EList<TemplateParameter>)eGet(UmlPackage.eINSTANCE.getTemplateSignature_OwnedParameter(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<RedefinableTemplateSignature> getExtendedSignature() {
		return (EList<RedefinableTemplateSignature>)eGet(UmlPackage.eINSTANCE.getRedefinableTemplateSignature_ExtendedSignature(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<TemplateParameter> getInheritedParameter() {
		return (EList<TemplateParameter>)eGet(UmlPackage.eINSTANCE.getRedefinableTemplateSignature_InheritedParameter(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Classifier getClassifier() {
		return (Classifier)eGet(UmlPackage.eINSTANCE.getRedefinableTemplateSignature_Classifier(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean redefines_parents(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.REDEFINABLE_TEMPLATE_SIGNATURE__REDEFINES_PARENTS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "redefines_parents", EObjectValidator.getObjectLabel(this, context) }),
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
	public EList<TemplateParameter> getInheritedParameters() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean own_elements(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.TEMPLATE_SIGNATURE__OWN_ELEMENTS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "own_elements", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean unique_parameters(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.TEMPLATE_SIGNATURE__UNIQUE_PARAMETERS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "unique_parameters", EObjectValidator.getObjectLabel(this, context) }),
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
	@Override
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == TemplateSignature.class) {
			switch (derivedFeatureID) {
				case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__PARAMETER: return UmlPackage.TEMPLATE_SIGNATURE__PARAMETER;
				case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__TEMPLATE: return UmlPackage.TEMPLATE_SIGNATURE__TEMPLATE;
				case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__OWNED_PARAMETER: return UmlPackage.TEMPLATE_SIGNATURE__OWNED_PARAMETER;
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
		if (baseClass == TemplateSignature.class) {
			switch (baseFeatureID) {
				case UmlPackage.TEMPLATE_SIGNATURE__PARAMETER: return UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__PARAMETER;
				case UmlPackage.TEMPLATE_SIGNATURE__TEMPLATE: return UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__TEMPLATE;
				case UmlPackage.TEMPLATE_SIGNATURE__OWNED_PARAMETER: return UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__OWNED_PARAMETER;
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
		if (baseClass == TemplateSignature.class) {
			switch (baseOperationID) {
				case UmlPackage.TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP: return UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP: return UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP;
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
			case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___REDEFINES_PARENTS__DIAGNOSTICCHAIN_MAP:
				return redefines_parents((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___GET_INHERITED_PARAMETERS:
				return getInheritedParameters();
			case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP:
				return own_elements((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP:
				return unique_parameters((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
		}
		return super.eInvoke(operationID, arguments);
	}

} //RedefinableTemplateSignatureImpl
