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

import uml.ActivityEdge;
import uml.Classifier;
import uml.Connector;
import uml.DirectedRelationship;
import uml.Element;
import uml.InformationFlow;
import uml.Message;
import uml.NamedElement;
import uml.Relationship;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Information Flow</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.InformationFlowImpl#getRelatedElement <em>Related Element</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getSource <em>Source</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getTarget <em>Target</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getConveyed <em>Conveyed</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getInformationSource <em>Information Source</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getInformationTarget <em>Information Target</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getRealization <em>Realization</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getRealizingActivityEdge <em>Realizing Activity Edge</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getRealizingConnector <em>Realizing Connector</em>}</li>
 *   <li>{@link uml.impl.InformationFlowImpl#getRealizingMessage <em>Realizing Message</em>}</li>
 * </ul>
 *
 * @generated
 */
public class InformationFlowImpl extends PackageableElementImpl implements InformationFlow {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected InformationFlowImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInformationFlow();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getRelatedElement() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getRelationship_RelatedElement(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getSource() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getDirectedRelationship_Source(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getTarget() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getDirectedRelationship_Target(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Classifier> getConveyed() {
		return (EList<Classifier>)eGet(UmlPackage.eINSTANCE.getInformationFlow_Conveyed(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getInformationSource() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getInformationFlow_InformationSource(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getInformationTarget() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getInformationFlow_InformationTarget(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Relationship> getRealization() {
		return (EList<Relationship>)eGet(UmlPackage.eINSTANCE.getInformationFlow_Realization(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getRealizingActivityEdge() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getInformationFlow_RealizingActivityEdge(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Connector> getRealizingConnector() {
		return (EList<Connector>)eGet(UmlPackage.eINSTANCE.getInformationFlow_RealizingConnector(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Message> getRealizingMessage() {
		return (EList<Message>)eGet(UmlPackage.eINSTANCE.getInformationFlow_RealizingMessage(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean must_conform(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.INFORMATION_FLOW__MUST_CONFORM,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "must_conform", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean sources_and_targets_kind(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.INFORMATION_FLOW__SOURCES_AND_TARGETS_KIND,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "sources_and_targets_kind", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean convey_classifiers(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.INFORMATION_FLOW__CONVEY_CLASSIFIERS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "convey_classifiers", EObjectValidator.getObjectLabel(this, context) }),
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
		if (baseClass == Relationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.INFORMATION_FLOW__RELATED_ELEMENT: return UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.INFORMATION_FLOW__SOURCE: return UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
				case UmlPackage.INFORMATION_FLOW__TARGET: return UmlPackage.DIRECTED_RELATIONSHIP__TARGET;
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
		if (baseClass == Relationship.class) {
			switch (baseFeatureID) {
				case UmlPackage.RELATIONSHIP__RELATED_ELEMENT: return UmlPackage.INFORMATION_FLOW__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (baseFeatureID) {
				case UmlPackage.DIRECTED_RELATIONSHIP__SOURCE: return UmlPackage.INFORMATION_FLOW__SOURCE;
				case UmlPackage.DIRECTED_RELATIONSHIP__TARGET: return UmlPackage.INFORMATION_FLOW__TARGET;
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
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.INFORMATION_FLOW___MUST_CONFORM__DIAGNOSTICCHAIN_MAP:
				return must_conform((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.INFORMATION_FLOW___SOURCES_AND_TARGETS_KIND__DIAGNOSTICCHAIN_MAP:
				return sources_and_targets_kind((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.INFORMATION_FLOW___CONVEY_CLASSIFIERS__DIAGNOSTICCHAIN_MAP:
				return convey_classifiers((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
		}
		return super.eInvoke(operationID, arguments);
	}

} //InformationFlowImpl
