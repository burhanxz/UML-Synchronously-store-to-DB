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

import uml.MultiplicityElement;
import uml.Operation;
import uml.Parameter;
import uml.ParameterDirectionKind;
import uml.ParameterEffectKind;
import uml.ParameterSet;
import uml.UmlPackage;
import uml.ValueSpecification;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Parameter</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ParameterImpl#isIsOrdered <em>Is Ordered</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#isIsUnique <em>Is Unique</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getLower <em>Lower</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getLowerValue <em>Lower Value</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getUpper <em>Upper</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getUpperValue <em>Upper Value</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getDefault <em>Default</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getDefaultValue <em>Default Value</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getDirection <em>Direction</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getEffect <em>Effect</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#isIsException <em>Is Exception</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#isIsStream <em>Is Stream</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getOperation <em>Operation</em>}</li>
 *   <li>{@link uml.impl.ParameterImpl#getParameterSet <em>Parameter Set</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ParameterImpl extends ConnectableElementImpl implements Parameter {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ParameterImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getParameter();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsOrdered() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_IsOrdered(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsOrdered(boolean newIsOrdered) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_IsOrdered(), newIsOrdered);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsUnique() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_IsUnique(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsUnique(boolean newIsUnique) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_IsUnique(), newIsUnique);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getLower() {
		return (Integer)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_Lower(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setLower(int newLower) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_Lower(), newLower);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getLowerValue() {
		return (ValueSpecification)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_LowerValue(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setLowerValue(ValueSpecification newLowerValue) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_LowerValue(), newLowerValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int getUpper() {
		return (Integer)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_Upper(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setUpper(int newUpper) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_Upper(), newUpper);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getUpperValue() {
		return (ValueSpecification)eGet(UmlPackage.eINSTANCE.getMultiplicityElement_UpperValue(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setUpperValue(ValueSpecification newUpperValue) {
		eSet(UmlPackage.eINSTANCE.getMultiplicityElement_UpperValue(), newUpperValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDefault() {
		return (String)eGet(UmlPackage.eINSTANCE.getParameter_Default(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDefault(String newDefault) {
		eSet(UmlPackage.eINSTANCE.getParameter_Default(), newDefault);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void unsetDefault() {
		eUnset(UmlPackage.eINSTANCE.getParameter_Default());
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isSetDefault() {
		return eIsSet(UmlPackage.eINSTANCE.getParameter_Default());
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getDefaultValue() {
		return (ValueSpecification)eGet(UmlPackage.eINSTANCE.getParameter_DefaultValue(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDefaultValue(ValueSpecification newDefaultValue) {
		eSet(UmlPackage.eINSTANCE.getParameter_DefaultValue(), newDefaultValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ParameterDirectionKind getDirection() {
		return (ParameterDirectionKind)eGet(UmlPackage.eINSTANCE.getParameter_Direction(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDirection(ParameterDirectionKind newDirection) {
		eSet(UmlPackage.eINSTANCE.getParameter_Direction(), newDirection);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ParameterEffectKind getEffect() {
		return (ParameterEffectKind)eGet(UmlPackage.eINSTANCE.getParameter_Effect(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEffect(ParameterEffectKind newEffect) {
		eSet(UmlPackage.eINSTANCE.getParameter_Effect(), newEffect);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void unsetEffect() {
		eUnset(UmlPackage.eINSTANCE.getParameter_Effect());
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isSetEffect() {
		return eIsSet(UmlPackage.eINSTANCE.getParameter_Effect());
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsException() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getParameter_IsException(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsException(boolean newIsException) {
		eSet(UmlPackage.eINSTANCE.getParameter_IsException(), newIsException);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsStream() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getParameter_IsStream(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsStream(boolean newIsStream) {
		eSet(UmlPackage.eINSTANCE.getParameter_IsStream(), newIsStream);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Operation getOperation() {
		return (Operation)eGet(UmlPackage.eINSTANCE.getParameter_Operation(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ParameterSet> getParameterSet() {
		return (EList<ParameterSet>)eGet(UmlPackage.eINSTANCE.getParameter_ParameterSet(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean in_and_out(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__IN_AND_OUT,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "in_and_out", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean not_exception(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__NOT_EXCEPTION,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "not_exception", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean connector_end(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__CONNECTOR_END,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "connector_end", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean reentrant_behaviors(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__REENTRANT_BEHAVIORS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "reentrant_behaviors", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean stream_and_exception(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__STREAM_AND_EXCEPTION,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "stream_and_exception", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean object_effect(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.PARAMETER__OBJECT_EFFECT,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "object_effect", EObjectValidator.getObjectLabel(this, context) }),
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
	public void setBooleanDefaultValue(boolean value) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIntegerDefaultValue(int value) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setNullDefaultValue() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setRealDefaultValue(double value) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setStringDefaultValue(String value) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setUnlimitedNaturalDefaultValue(int value) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean upper_ge_lower(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__UPPER_GE_LOWER,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "upper_ge_lower", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean lower_ge_0(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__LOWER_GE_0,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "lower_ge_0", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean value_specification_no_side_effects(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_NO_SIDE_EFFECTS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "value_specification_no_side_effects", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean value_specification_constant(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_CONSTANT,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "value_specification_constant", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean lower_is_integer(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__LOWER_IS_INTEGER,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "lower_is_integer", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean upper_is_unlimitedNatural(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.MULTIPLICITY_ELEMENT__UPPER_IS_UNLIMITED_NATURAL,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "upper_is_unlimitedNatural", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean compatibleWith(MultiplicityElement other) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean includesMultiplicity(MultiplicityElement M) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean is(int lowerbound, int upperbound) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isMultivalued() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int lowerBound() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public int upperBound() {
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
		if (baseClass == MultiplicityElement.class) {
			switch (derivedFeatureID) {
				case UmlPackage.PARAMETER__IS_ORDERED: return UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED;
				case UmlPackage.PARAMETER__IS_UNIQUE: return UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE;
				case UmlPackage.PARAMETER__LOWER: return UmlPackage.MULTIPLICITY_ELEMENT__LOWER;
				case UmlPackage.PARAMETER__LOWER_VALUE: return UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE;
				case UmlPackage.PARAMETER__UPPER: return UmlPackage.MULTIPLICITY_ELEMENT__UPPER;
				case UmlPackage.PARAMETER__UPPER_VALUE: return UmlPackage.MULTIPLICITY_ELEMENT__UPPER_VALUE;
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
		if (baseClass == MultiplicityElement.class) {
			switch (baseFeatureID) {
				case UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED: return UmlPackage.PARAMETER__IS_ORDERED;
				case UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE: return UmlPackage.PARAMETER__IS_UNIQUE;
				case UmlPackage.MULTIPLICITY_ELEMENT__LOWER: return UmlPackage.PARAMETER__LOWER;
				case UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE: return UmlPackage.PARAMETER__LOWER_VALUE;
				case UmlPackage.MULTIPLICITY_ELEMENT__UPPER: return UmlPackage.PARAMETER__UPPER;
				case UmlPackage.MULTIPLICITY_ELEMENT__UPPER_VALUE: return UmlPackage.PARAMETER__UPPER_VALUE;
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
		if (baseClass == MultiplicityElement.class) {
			switch (baseOperationID) {
				case UmlPackage.MULTIPLICITY_ELEMENT___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___LOWER_GE_0__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___LOWER_GE_0__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP: return UmlPackage.PARAMETER___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.MULTIPLICITY_ELEMENT___SET_LOWER__INT: return UmlPackage.PARAMETER___SET_LOWER__INT;
				case UmlPackage.MULTIPLICITY_ELEMENT___SET_UPPER__INT: return UmlPackage.PARAMETER___SET_UPPER__INT;
				case UmlPackage.MULTIPLICITY_ELEMENT___COMPATIBLE_WITH__MULTIPLICITYELEMENT: return UmlPackage.PARAMETER___COMPATIBLE_WITH__MULTIPLICITYELEMENT;
				case UmlPackage.MULTIPLICITY_ELEMENT___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT: return UmlPackage.PARAMETER___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT;
				case UmlPackage.MULTIPLICITY_ELEMENT___IS__INT_INT: return UmlPackage.PARAMETER___IS__INT_INT;
				case UmlPackage.MULTIPLICITY_ELEMENT___IS_MULTIVALUED: return UmlPackage.PARAMETER___IS_MULTIVALUED;
				case UmlPackage.MULTIPLICITY_ELEMENT___GET_LOWER: return UmlPackage.PARAMETER___GET_LOWER;
				case UmlPackage.MULTIPLICITY_ELEMENT___LOWER_BOUND: return UmlPackage.PARAMETER___LOWER_BOUND;
				case UmlPackage.MULTIPLICITY_ELEMENT___GET_UPPER: return UmlPackage.PARAMETER___GET_UPPER;
				case UmlPackage.MULTIPLICITY_ELEMENT___UPPER_BOUND: return UmlPackage.PARAMETER___UPPER_BOUND;
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
			case UmlPackage.PARAMETER___IN_AND_OUT__DIAGNOSTICCHAIN_MAP:
				return in_and_out((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___NOT_EXCEPTION__DIAGNOSTICCHAIN_MAP:
				return not_exception((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___CONNECTOR_END__DIAGNOSTICCHAIN_MAP:
				return connector_end((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___REENTRANT_BEHAVIORS__DIAGNOSTICCHAIN_MAP:
				return reentrant_behaviors((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___STREAM_AND_EXCEPTION__DIAGNOSTICCHAIN_MAP:
				return stream_and_exception((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___OBJECT_EFFECT__DIAGNOSTICCHAIN_MAP:
				return object_effect((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___SET_BOOLEAN_DEFAULT_VALUE__BOOLEAN:
				setBooleanDefaultValue((Boolean)arguments.get(0));
				return null;
			case UmlPackage.PARAMETER___SET_INTEGER_DEFAULT_VALUE__INT:
				setIntegerDefaultValue((Integer)arguments.get(0));
				return null;
			case UmlPackage.PARAMETER___SET_NULL_DEFAULT_VALUE:
				setNullDefaultValue();
				return null;
			case UmlPackage.PARAMETER___SET_REAL_DEFAULT_VALUE__DOUBLE:
				setRealDefaultValue((Double)arguments.get(0));
				return null;
			case UmlPackage.PARAMETER___SET_STRING_DEFAULT_VALUE__STRING:
				setStringDefaultValue((String)arguments.get(0));
				return null;
			case UmlPackage.PARAMETER___SET_UNLIMITED_NATURAL_DEFAULT_VALUE__INT:
				setUnlimitedNaturalDefaultValue((Integer)arguments.get(0));
				return null;
			case UmlPackage.PARAMETER___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP:
				return upper_ge_lower((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___LOWER_GE_0__DIAGNOSTICCHAIN_MAP:
				return lower_ge_0((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP:
				return value_specification_no_side_effects((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP:
				return value_specification_constant((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP:
				return lower_is_integer((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP:
				return upper_is_unlimitedNatural((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.PARAMETER___COMPATIBLE_WITH__MULTIPLICITYELEMENT:
				return compatibleWith((MultiplicityElement)arguments.get(0));
			case UmlPackage.PARAMETER___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT:
				return includesMultiplicity((MultiplicityElement)arguments.get(0));
			case UmlPackage.PARAMETER___IS__INT_INT:
				return is((Integer)arguments.get(0), (Integer)arguments.get(1));
			case UmlPackage.PARAMETER___IS_MULTIVALUED:
				return isMultivalued();
			case UmlPackage.PARAMETER___LOWER_BOUND:
				return lowerBound();
			case UmlPackage.PARAMETER___UPPER_BOUND:
				return upperBound();
		}
		return super.eInvoke(operationID, arguments);
	}

} //ParameterImpl
